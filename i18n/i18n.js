/* Traduções por dicionário flat. Configuração em i18n-config.json.
   Idioma: ?l=xx, depois subdomínio, depois localStorage, depois PT.
   Chamar NexusI18n.reapply() depois de injetar conteúdo dinâmico. */

(function () {
  'use strict';

  var BASE = (function () {
    var s = document.currentScript;
    if (!s || !s.src) return 'i18n/';
    return s.src.replace(/i18n\.js.*$/, '');
  })();

  var CONFIG_URL = BASE + 'i18n-config.json';
  var STORE_KEY = 'nx-lang';

  function readStore() {
    try { return window.localStorage.getItem(STORE_KEY) || ''; } catch (e) { return ''; }
  }

  function writeStore(lang) {
    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  function clearStore() {
    try { window.localStorage.removeItem(STORE_KEY); } catch (e) { /* modo privado */ }
  }

  function fetchJSON(url) {
    return fetch(url, { credentials: 'same-origin', cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + url);
      return r.json();
    });
  }

  function isEditable(el) {
    for (var n = el; n; n = n.parentElement) {
      if (n.isContentEditable) return true;
      var t = n.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return true;
    }
    return false;
  }

  var lastDict = null;

  function translateTree(root, dict, stats) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p || p.closest('script, style, noscript, template, [data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        if (isEditable(p)) return NodeFilter.FILTER_REJECT;
        return dict[node.nodeValue.trim()] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var hits = [];
    while (walker.nextNode()) hits.push(walker.currentNode);
    hits.forEach(function (n) {
      var key = n.nodeValue.trim();
      n.nodeValue = n.nodeValue.replace(key, dict[key]);
      stats.applied++;
    });
  }

  function run(dict) {
    var stats = { applied: 0 };
    translateTree(document.body, dict, stats);

    ['title', 'placeholder', 'aria-label', 'alt'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var v = (el.getAttribute(attr) || '').trim();
        if (v && dict[v]) {
          el.setAttribute(attr, dict[v]);
          stats.applied++;
        }
      });
    });

    document.documentElement.lang = i18n.lang;
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: stats }));
    return stats;
  }

  var i18n = window.NexusI18n = {
    lang: 'pt',
    host: null,
    applied: false,
    apply: function (dict) { lastDict = dict; return run(dict); },
    reapply: function () { return lastDict ? run(lastDict) : { applied: 0 }; },
    t: function (key) { return (lastDict && lastDict[key]) || key; },
    saved: readStore,
    save: function (lang) { writeStore(lang); }
  };

  function paramLang() {
    var p = new URLSearchParams(location.search);
    return (p.get('l') || p.get('lang') || '').trim().toLowerCase();
  }

  function collectAvailable(map) {
    var out = { pt: null };
    Object.keys(map).forEach(function (h) {
      var e = map[h];
      if (e && e.file) out[e.lang || e.file.replace(/\.json$/, '')] = e.file;
    });
    return out;
  }

  function pickLang(available, hostEntry) {
    var q = paramLang();
    if (q) {
      if (!(q in available)) return { lang: 'pt', save: null, warn: 'idioma desconhecido: ' + q };
      return { lang: q, save: q === 'pt' ? null : q };
    }
    if (hostEntry && hostEntry.file) {
      return { lang: hostEntry.lang || hostEntry.file.replace(/\.json$/, ''), save: null };
    }
    var stored = readStore();
    if (stored && (stored in available) && stored !== 'pt') return { lang: stored, save: null };
    return { lang: 'pt', save: null };
  }

  function boot() {
    var host = (location.hostname || '').toLowerCase();
    i18n.host = host;

    fetchJSON(CONFIG_URL).then(function (map) {
      var available = collectAvailable(map);
      var pick = pickLang(available, map[host]);

      if (pick.warn) throw new Error(pick.warn);
      if (pick.save) writeStore(pick.save);
      else if (pick.lang === 'pt') clearStore();

      i18n.lang = pick.lang;
      if (pick.lang === 'pt') return null; // PT nativo, nada a traduzir

      return fetchJSON(BASE + available[pick.lang]).then(function (dict) {
        if (!dict || !Object.keys(dict).length) throw new Error('dicionário vazio: ' + pick.lang);
        i18n.apply(dict);
        i18n.applied = true;
      });
    }).catch(function (err) {
      if (window.console && console.info) {
        console.info('[NexusI18n] PT nativo (' + err.message + ')');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
