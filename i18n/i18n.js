/* ─────────────────────────────────────────────────────────────
   NexusPT — i18n por subdomínio
   Configuração em i18n/i18n-config.json (junto a este ficheiro):
   {
     "en.nexuspt.eu": { "file": "en.json", "lang": "en" },
     "fr.nexuspt.eu": { "file": "fr.json", "lang": "fr" }
   }
   Dicionário flat de texto exato: { "olá": "hello", ... }
   Só traduz quando o hostname tem entrada na config
   (ex.: en.nexuspt.eu). Em nexuspt.eu fica PT nativo.
   Override de teste: ?lang=en (não grava nada).
   Conteúdo dinâmico: chamar NexusI18n.reapply() após injetar DOM.
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  var BASE = (function () {
    var s = document.currentScript;
    if (!s || !s.src) return 'i18n/';
    return s.src.replace(/i18n\.js.*$/, '');
  })();

  var CONFIG_URL = BASE + 'i18n-config.json';

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
    reapply: function () { return lastDict ? run(lastDict) : { applied: 0 }; }
  };

  function boot() {
    var host = (location.hostname || '').toLowerCase();
    i18n.host = host;

    var forced = new URLSearchParams(location.search).get('lang');
    var promise;

    if (forced) {
      i18n.lang = forced;
      promise = fetchJSON(BASE + forced + '.json');
    } else {
      promise = fetchJSON(CONFIG_URL).then(function (map) {
        var entry = map[host];
        if (!entry || !entry.file) throw new Error('sem entrada para ' + host);
        i18n.lang = entry.lang || entry.file.replace(/\.json$/, '');
        return fetchJSON(BASE + entry.file);
      });
    }

    promise.then(function (dict) {
      if (!dict || !Object.keys(dict).length) throw new Error('dicionário vazio');
      i18n.apply(dict);
      i18n.applied = true;
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
