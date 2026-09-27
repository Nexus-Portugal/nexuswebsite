/* ─────────────────────────────────────────────────────────────
   NexusPT — Consentimento de cookies (RGPD / ePrivacy)
   - Banner com Aceitar / Rejeitar / Preferências (rejeitar é
     tão fácil como aceitar; sem dark patterns).
   - Preferências granulares: essenciais, analítica, publicidade.
   - Guarda em localStorage (chave "nx-consent") e dispara o
     evento "nx:consent" com as categorias aceites.
   - Scripts de terceiros só correm APÓS consentimento: adiciona
     os teus URLs em SCRIPTS.analytics / SCRIPTS.ads.
   - Reabre a qualquer momento: NexusConsent.open()
     (o link "Definições de cookies" do footer usa isto).
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  var KEY = 'nx-consent';
  var VERSION = '1';

  var SCRIPTS = {
    analytics: [
      // ex.: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
    ],
    ads: [
      // ex.: 'https://...adcash...'
    ]
  };

  var loaded = { analytics: false, ads: false };

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      if (v && v.version === VERSION) return v;
    } catch (e) { /* ignore */ }
    return null;
  }

  function save(categories) {
    var value = {
      version: VERSION,
      necessary: true,
      analytics: !!categories.analytics,
      ads: !!categories.ads,
      ts: new Date().toISOString()
    };
    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) { /* ignore */ }
    return value;
  }

  function injectScripts(category) {
    if (loaded[category]) return;
    loaded[category] = true;
    (SCRIPTS[category] || []).forEach(function (src) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
    });
  }

  function apply(value) {
    if (value.analytics) injectScripts('analytics');
    if (value.ads) injectScripts('ads');
    document.dispatchEvent(new CustomEvent('nx:consent', { detail: value }));
  }

  /* ── Construção do DOM ── */

  var banner, panel, lastFocus = null;

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'checked' || k === 'disabled') n[k] = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    if (text != null) n.textContent = text;
    return n;
  }

  function buildToggle(name, labelKey, descKey, checked, disabled) {
    var wrap = el('div', { class: 'nx-consent-item' });
    var row = el('div', { class: 'nx-consent-row' });
    var cb = el('input', {
      type: 'checkbox',
      id: 'nx-consent-' + name,
      class: 'nx-consent-check',
      checked: !!checked,
      disabled: !!disabled
    });
    cb.dataset.category = name;
    var label = el('label', { for: 'nx-consent-' + name, class: 'nx-consent-label' },
      t(labelKey));
    row.appendChild(cb);
    row.appendChild(label);
    wrap.appendChild(row);
    wrap.appendChild(el('p', { class: 'nx-consent-desc' }, t(descKey)));
    return wrap;
  }

  var STR = {
    title: 'Este site utiliza cookies',
    text: 'Usamos cookies essenciais para o site funcionar e, com o teu consentimento, cookies de analítica e publicidade. Podes escolher o que aceitas.',
    accept: 'Aceitar tudo',
    reject: 'Rejeitar',
    prefs: 'Preferências',
    save: 'Guardar preferências',
    close: 'Fechar',
    necessary: 'Essenciais (sempre ativos)',
    necessaryDesc: 'Necessários para o funcionamento do site. Não podem ser desativados.',
    analytics: 'Analítica',
    analyticsDesc: 'Ajuda-nos a entender como o site é utilizado.',
    ads: 'Publicidade',
    adsDesc: 'Usada para mostrar anúncios relevantes.',
    more: 'Ver Política de Cookies',
    settings: 'Definições de cookies',
    bannerLabel: 'Consentimento de cookies',
    dialogLabel: 'Definições de cookies'
  };

  function t(key) { return STR[key]; }

  function buildBanner() {
    banner = el('div', { class: 'nx-consent', role: 'region', 'aria-label': STR.bannerLabel, hidden: '' });

    var box = el('div', { class: 'nx-consent-box' });
    box.appendChild(el('p', { class: 'nx-consent-title' }, STR.title));
    box.appendChild(el('p', { class: 'nx-consent-text' }, STR.text));

    var actions = el('div', { class: 'nx-consent-actions' });
    var bPrefs = el('button', { type: 'button', class: 'nx-consent-btn nx-consent-ghost' }, STR.prefs);
    var bReject = el('button', { type: 'button', class: 'nx-consent-btn nx-consent-ghost' }, STR.reject);
    var bAccept = el('button', { type: 'button', class: 'nx-consent-btn nx-consent-primary' }, STR.accept);
    bPrefs.addEventListener('click', openPanel);
    bReject.addEventListener('click', function () { decide({ analytics: false, ads: false }); });
    bAccept.addEventListener('click', function () { decide({ analytics: true, ads: true }); });
    actions.appendChild(bPrefs);
    actions.appendChild(bReject);
    actions.appendChild(bAccept);

    box.appendChild(actions);
    banner.appendChild(box);
    document.body.appendChild(banner);
  }

  function buildPanel() {
    panel = el('div', { class: 'nx-consent-overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': STR.dialogLabel, hidden: '' });

    var dialog = el('div', { class: 'nx-consent-dialog' });
    var head = el('div', { class: 'nx-consent-head' });
    head.appendChild(el('h2', { class: 'nx-consent-h2' }, STR.settings));
    var bClose = el('button', { type: 'button', class: 'nx-consent-x', 'aria-label': STR.close }, '×');
    bClose.addEventListener('click', closePanel);
    head.appendChild(bClose);
    dialog.appendChild(head);

    var previous = read();
    var analyticsChecked = previous ? previous.analytics : false;
    var adsChecked = previous ? previous.ads : false;

    dialog.appendChild(buildToggle('necessary', 'necessary', 'necessaryDesc', true, true));
    dialog.appendChild(buildToggle('analytics', 'analytics', 'analyticsDesc', analyticsChecked, false));
    dialog.appendChild(buildToggle('ads', 'ads', 'adsDesc', adsChecked, false));

    var foot = el('div', { class: 'nx-consent-foot' });
    var aPolicy = el('a', { class: 'nx-consent-more', href: 'cookies.html' }, STR.more);
    var bSave = el('button', { type: 'button', class: 'nx-consent-btn nx-consent-primary' }, STR.save);
    bSave.addEventListener('click', function () {
      var analytics = dialog.querySelector('[data-category="analytics"]').checked;
      var ads = dialog.querySelector('[data-category="ads"]').checked;
      decide({ analytics: analytics, ads: ads });
      closePanel(true);
    });
    foot.appendChild(aPolicy);
    foot.appendChild(bSave);
    dialog.appendChild(foot);

    panel.appendChild(dialog);
    document.body.appendChild(panel);

    panel.addEventListener('click', function (e) { if (e.target === panel) closePanel(); });
    panel.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });
  }

  function decide(categories) {
    var value = save(categories);
    apply(value);
    if (banner) banner.hidden = true;
  }

  function openPanel() {
    if (!panel) buildPanel();
    if (window.NexusI18n && window.NexusI18n.applied) {
      window.NexusI18n.reapply();
    }
    lastFocus = document.activeElement;
    panel.hidden = false;
    var first = panel.querySelector('button, [href], input');
    if (first) first.focus();
  }

  function closePanel(keepBanner) {
    if (!panel) return;
    panel.hidden = true;
    if (lastFocus && !keepBanner && lastFocus.focus) lastFocus.focus();
    if (!keepBanner && !read() && banner) banner.hidden = false;
  }

  function addFooterLink() {
    var list = document.querySelector('.footer-links');
    if (!list || list.querySelector('[data-consent-settings]')) return;
    var a = el('a', { href: '#', 'data-consent-settings': '' }, STR.settings);
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openPanel();
    });
    list.appendChild(a);
  }

  function init() {
    buildBanner();
    addFooterLink();
    if (window.NexusI18n && window.NexusI18n.applied) {
      window.NexusI18n.reapply();
    }
    var stored = read();
    if (stored) {
      apply(stored);
    } else {
      requestAnimationFrame(function () { banner.hidden = false; });
    }
  }

  window.NexusConsent = { open: openPanel, get: read };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
