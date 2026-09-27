(function() {
  // Carregar Font Awesome (apenas se ainda não estiver carregado)
  if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
    fa.referrerPolicy = 'no-referrer';
    document.head.appendChild(fa);
  }

  // CSS mínimo para ícones sociais com Font Awesome
  const socialCss = `
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 18px 0;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  line-height: 1;
  opacity: 0.75;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.social-link:hover {
  opacity: 1;
  transform: translateY(-1px);
}
  `;

  // CSS dos dropdowns Serviços/Produtos (desktop) + secções mobile
  const dropdownCss = `
/* Dropdowns (desktop) — abrem em hover; o link principal mantém o estilo .nav a */
.nav .has-dropdown{position: relative}
.nav .dropdown{
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 6px);
  min-width: 240px;
  background: rgba(10,10,10,0.98);
  border: 1px solid var(--glass-border, rgba(255,255,255,0.09));
  border-radius: 14px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
  z-index: 1001;
  box-shadow: 0 18px 50px rgba(0,0,0,0.6);
}
.nav .has-dropdown.open .dropdown{
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}
.nav .dropdown a{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  white-space: nowrap;
}
.nav .dropdown a:hover{background: rgba(0,244,60,0.08)}
.nav .dropdown a i{
  font-size: 13px;
  width: 16px;
  text-align: center;
  color: var(--accent, #00f43c);
  opacity: 0.9;
}
.nav .dropdown .dropdown-sep{
  height: 1px;
  margin: 6px 8px;
  background: var(--glass-border, rgba(255,255,255,0.09));
}

/* Secções Serviços/Produtos no menu mobile */
.mobile-nav .mobile-nav-group{padding: 6px 0}
.mobile-nav .mobile-nav-label{
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-secondary, #a1a1a6);
  opacity: 1;
  padding: 8px 0 4px;
}
.mobile-nav .mobile-nav-sub{
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.mobile-nav .mobile-nav-sub i{
  font-size: 12px;
  width: 16px;
  text-align: center;
  color: var(--accent, #00f43c);
  opacity: 0.9;
}

@media(max-width: 768px){
  .nav .dropdown{display: none}
}
  `;

/* ─── Seletor de idioma PT/EN (desktop) — ao lado do ícone da conta ─── */
const langCss = `
.header-actions{
  display: flex;
  align-items: center;
}
.header-actions .client-area{margin-left: 12px}
.header-actions .lang-switch{margin-left: 12px}
.lang-switch{
  position: relative;
  display: flex;
  align-items: center;
}
.lang-switch__btn{
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: #161616;
  color: var(--text, #f5f5f7);
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: color 0.25s var(--ease, ease), border-color 0.25s var(--ease, ease), background 0.25s var(--ease, ease);
}
.lang-switch__btn:hover,
.lang-switch:focus-within .lang-switch__btn{
  color: var(--text, #f5f5f7);
  border-color: rgba(0,244,60,0.45);
  background: rgba(0,244,60,0.06);
}
.lang-switch__btn:focus-visible{
  outline: 2px solid var(--accent, #00f43c);
  outline-offset: 2px;
}
.lang-switch__btn .fas{font-size: 10px; transition: transform 0.22s var(--ease, ease)}
.lang-switch.open .lang-switch__btn .fas{transform: rotate(180deg)}
.lang-switch__menu{
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 150px;
  background: #0d0d0d;
  border: 1px solid var(--glass-border, rgba(255,255,255,0.09));
  border-radius: 12px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.22s var(--ease, ease), transform 0.22s var(--ease, ease), visibility 0.22s;
  z-index: 1001;
  box-shadow: 0 18px 50px rgba(0,0,0,0.6);
}
.lang-switch.open .lang-switch__menu{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.lang-switch__option{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 9px 11px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text, #f5f5f7);
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s var(--ease, ease);
}
.lang-switch__option:hover{background: rgba(0,244,60,0.08)}
.lang-switch__option:focus-visible{outline: 2px solid var(--accent, #00f43c); outline-offset: -2px}
.lang-switch__option .fas{width: 14px; text-align: center; color: var(--accent, #00f43c); font-size: 11px}

/* Secção de idioma no menu mobile */
.mobile-nav{
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mobile-nav .mobile-nav-label.lang{
  padding-top: 14px;
}
.lang-switch-mobile{
  display: flex;
  flex-direction: column;
  padding: 2px 18px 10px;
  gap: 4px;
}
.lang-switch-mobile button{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 11px 2px;
  border: none;
  border-bottom: 1px solid var(--glass-border, rgba(255,255,255,0.07));
  background: transparent;
  color: var(--text, #f5f5f7);
  font-family: inherit;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  text-align: left;
}
.lang-switch-mobile button .fas{width: 16px; text-align: center; color: var(--accent, #00f43c); font-size: 12px}

/* Barra de troca de idioma no modo dev (localhost) */
.nx-dev-langbar{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px 6px 12px;
  border-radius: 0 0 10px 10px;
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.14);
  border-top: none;
  color: var(--text-secondary, #a1a1a6);
  font-family: inherit;
  font-size: 11px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.nx-dev-langbar button{
  border: 1px solid var(--glass-border, rgba(255,255,255,0.09));
  background: rgba(255,255,255,0.04);
  color: var(--text, #f5f5f7);
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  cursor: pointer;
}
.nx-dev-langbar button.on{border-color: rgba(0,244,60,0.5); color: var(--accent, #00f43c)}
.nx-dev-langbar button:hover{background: rgba(0,244,60,0.08)}
`;

  // Injeta o CSS
  const style = document.createElement('style');
  style.textContent = socialCss + dropdownCss + langCss;
  document.head.appendChild(style);

  const headerHtml = `
    <div class="scroll-progress" id="scrollProgress"></div>
    <div class="mobile-overlay" id="mobileOverlay"></div>
    <header class="header" id="header">
      <div class="wrap">
        <div class="logo">
          <a href="index.html">
            <img src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/RealNexusWeb.png" alt="NexusPT">
          </a>
        </div>

        <nav class="nav">
          <a href="index.html">Início</a>
          <div class="has-dropdown">
            <a href="index.html#servicos" aria-haspopup="true" aria-expanded="false">Serviços</a>
            <div class="dropdown" role="menu">
              <a href="index.html#servicos" role="menuitem"><i class="fas fa-code"></i>Desenvolvimento &amp; Hospedagem</a>
              <a href="index.html#servicos" role="menuitem"><i class="fas fa-server"></i>Alojamento de Aplicações</a>
              <a href="index.html#servicos" role="menuitem"><i class="fas fa-shield-halved"></i>Security Operations Center</a>
              <a href="speedtest.html" role="menuitem"><i class="fas fa-gauge-high"></i>Speed Test</a>
            </div>
          </div>
          <div class="has-dropdown">
            <a href="index.html#produtos" aria-haspopup="true" aria-expanded="false">Produtos</a>
            <div class="dropdown" role="menu">
              <a href="https://drippi.nexuspt.eu" target="_blank" rel="noopener noreferrer" role="menuitem"><i class="fas fa-comments"></i>Drippi</a>
              <a href="https://cloud.nexuspt.eu" target="_blank" rel="noopener noreferrer" role="menuitem"><i class="fas fa-cloud"></i>NexusCloud</a>
              <a href="https://giae.edu.nexuspt.eu" target="_blank" rel="noopener noreferrer" role="menuitem"><i class="fas fa-graduation-cap"></i>NexusGiae</a>
              <div class="dropdown-sep" role="separator"></div>
              <a href="index.html#produtos" role="menuitem"><i class="fas fa-layer-group"></i>Todos os serviços</a>
            </div>
          </div>
          <a href="history.html">História</a>
          <a href="contact.html">Contacto</a>
        </nav>

        <div class="header-actions">
          <a href="https://my.nexuspt.eu/login" class="client-area" aria-label="Área do Cliente">
            <img src="https://cdn-icons-png.flaticon.com/128/5494/5494944.png" alt="Área do Cliente">
          </a>

          <div class="lang-switch" id="langSwitch">
          <button type="button" class="lang-switch__btn" id="langSwitchBtn" aria-haspopup="true" aria-expanded="false" aria-label="Mudar idioma">
            <span id="langSwitchCurrent">PT</span>
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="lang-switch__menu" role="menu">
            <button type="button" class="lang-switch__option" data-lang="pt" role="menuitem">
              Português <i class="fas fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" class="lang-switch__option" data-lang="en" role="menuitem">
              English <i class="fas fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" class="lang-switch__option" data-lang="fr" role="menuitem">
              Français <i class="fas fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" class="lang-switch__option" data-lang="de" role="menuitem">
              Deutsch <i class="fas fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" class="lang-switch__option" data-lang="es" role="menuitem">
              Español <i class="fas fa-check" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        </div>

        <button class="menu-toggle" id="menuToggle" aria-label="Menu">
          <span></span>
        </button>

        <nav class="mobile-nav" id="mobileNav">
          <a href="index.html">Início</a>
          <div class="mobile-nav-group">
            <div class="mobile-nav-label">Serviços</div>
            <a class="mobile-nav-sub" href="index.html#servicos"><i class="fas fa-code"></i>Desenvolvimento &amp; Hospedagem</a>
            <a class="mobile-nav-sub" href="index.html#servicos"><i class="fas fa-server"></i>Alojamento de Aplicações</a>
            <a class="mobile-nav-sub" href="index.html#servicos"><i class="fas fa-shield-halved"></i>Security Operations Center</a>
            <a class="mobile-nav-sub" href="speedtest.html"><i class="fas fa-gauge-high"></i>Speed Test</a>
          </div>
          <div class="mobile-nav-group">
            <div class="mobile-nav-label">Produtos</div>
            <a class="mobile-nav-sub" href="https://drippi.nexuspt.eu" target="_blank" rel="noopener noreferrer"><i class="fas fa-comments"></i>Drippi</a>
            <a class="mobile-nav-sub" href="https://cloud.nexuspt.eu" target="_blank" rel="noopener noreferrer"><i class="fas fa-cloud"></i>NexusCloud</a>
            <a class="mobile-nav-sub" href="https://giae.edu.nexuspt.eu" target="_blank" rel="noopener noreferrer"><i class="fas fa-graduation-cap"></i>NexusGiae</a>
            <a class="mobile-nav-sub" href="index.html#produtos"><i class="fas fa-layer-group"></i>Todos os serviços</a>
          </div>
          <a href="history.html">História</a>
          <a href="contact.html">Contacto</a>
          <a href="https://my.nexuspt.eu/login">Área do Cliente</a>
          <div class="mobile-nav-group lang">
            <div class="mobile-nav-label lang">Idioma</div>
            <div class="lang-switch-mobile">
              <button type="button" data-lang="pt">Português <i class="fas fa-check" aria-hidden="true"></i></button>
              <button type="button" data-lang="en">English <i class="fas fa-check" aria-hidden="true"></i></button>
              <button type="button" data-lang="fr">Français <i class="fas fa-check" aria-hidden="true"></i></button>
              <button type="button" data-lang="de">Deutsch <i class="fas fa-check" aria-hidden="true"></i></button>
              <button type="button" data-lang="es">Español <i class="fas fa-check" aria-hidden="true"></i></button>
            </div>
            </div>
          </div>
        </nav>
      </div>
    </header>`;

  const footerHtml = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-links">
          <a href="privacidade.html">Política de Privacidade</a>
          <a href="termos.html">Termos e Condições</a>
          <a href="cookies.html">Política de Cookies</a>
        </div>

        <div class="social-links">
          <a href="https://www.instagram.com/nexuspt.eu/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="https://x.com/Nexuspt_eu" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="X">
            <i class="fa-brands fa-x-twitter"></i>
          </a>

          <a href="https://www.tiktok.com/@nexuspt.eu" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i class="fab fa-tiktok"></i>
          </a>

          <a href="https://www.youtube.com/@NexusPT-eu" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>

          <a href="https://whatsapp.com/channel/0029VbBuvRVA2pL9IncqrP1l" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>

          <a href="https://discord.gg/R2ywvBy7jv" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <i class="fab fa-discord"></i>
          </a>
        </div>

        <p>© 2026 NexusPT. Todos os direitos reservados.</p>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', headerHtml);
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Dropdowns Serviços/Produtos: abrem em hover, fecham ao sair/clicar num item/ESC
  document.querySelectorAll('.nav .has-dropdown').forEach(dd => {
    const toggle = dd.querySelector(':scope > a');
    let closeTimer = null;

    function openDropdown() {
      clearTimeout(closeTimer);
      dd.classList.add('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      dd.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    dd.addEventListener('mouseenter', openDropdown);
    dd.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(closeDropdown, 140);
    });

    dd.querySelectorAll('.dropdown a').forEach(function (link) {
      link.addEventListener('click', closeDropdown);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menuToggle.classList.add('active');
    mobileNav.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function toggleMenu(e) {
    if (e) e.stopPropagation();
    const isOpen = mobileNav.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  }

  menuToggle.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  });

  const scrollProgress = document.getElementById('scrollProgress');
  const header = document.getElementById('header');

  function updateScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;

    scrollProgress.style.width = scrolled + '%';
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', updateScroll);
  updateScroll();

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  // ─── Seletor de idioma PT/EN/FR/DE/ES ───
  // EN tem subdomínio próprio (en.nexuspt.eu). FR/DE/ES ainda não têm
  // DNS, por isso são servidos no próprio domínio via ?l=xx — o i18n.js
  // guarda a escolha em localStorage e mantém-a entre páginas.
  const LANG_KEY = 'nx-lang';
  const LANGS = {
    pt: { label: 'PT', hostname: 'nexuspt.eu' },
    en: { label: 'EN', hostname: 'en.nexuspt.eu' },
    fr: { label: 'FR', hostname: null },
    de: { label: 'DE', hostname: null },
    es: { label: 'ES', hostname: null }
  };

  function readSavedLang() {
    try { return window.localStorage.getItem(LANG_KEY) || ''; } catch (e) { return ''; }
  }

  function currentLang() {
    const p = new URLSearchParams(window.location.search);
    const forced = (p.get('l') || p.get('lang') || '').trim().toLowerCase();
    if (forced && LANGS[forced]) return forced;
    const host = (window.location.hostname || '').toLowerCase();
    if (host.startsWith('en.')) return 'en';
    const saved = readSavedLang();
    return saved && LANGS[saved] ? saved : 'pt';
  }

  function targetLangUrl(lang) {
    const url = new URL(window.location.href);
    const host = (window.location.hostname || '').toLowerCase();
    const isLocal = !host.includes('nexuspt.eu');
    const useParam = isLocal || !LANGS[lang].hostname;

    if (useParam) {
      // sem subdomínio: ?l=xx (o i18n.js faz o resto)
      if (lang === 'pt') {
        url.searchParams.delete('l');
        url.searchParams.delete('lang');
      } else {
        url.searchParams.delete('lang');
        url.searchParams.set('l', lang);
      }
    } else {
      // produção: troca de subdomínio, preservando caminho e query
      url.hostname = LANGS[lang].hostname;
      url.searchParams.delete('l');
      url.searchParams.delete('lang');
    }
    return url.toString();
  }

  function applyLangUI() {
    const lang = currentLang();
    const current = document.getElementById('langSwitchCurrent');
    if (current) current.textContent = LANGS[lang].label;
    document.querySelectorAll('.lang-switch__option, .lang-switch-mobile button').forEach(opt => {
      const isCurrent = opt.getAttribute('data-lang') === lang;
      const check = opt.querySelector('.fas');
      if (check) check.style.visibility = isCurrent ? 'visible' : 'hidden';
      if (isLocalDev()) {
        // dev: navegação local em vez de troca de hostname
        opt.setAttribute('data-url', targetLangUrl(opt.getAttribute('data-lang')));
      }
    });
  }

  function isLocalDev() {
    const host = (window.location.hostname || '').toLowerCase();
    return host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  }

  function switchLang(lang) {
    if (lang === currentLang()) return;
    // O i18n.js aplica o idioma a partir de ?l=xx ou do valor guardado.
    // Escrever aqui garante que a próxima página já arranca no certo;
    // voltar ao PT limpa a escolha, senão voltava ao idioma anterior.
    try {
      if (lang === 'pt') window.localStorage.removeItem(LANG_KEY);
      else window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* modo privado */ }
    window.location.href = targetLangUrl(lang);
  }

  const langSwitch = document.getElementById('langSwitch');
  const langBtn = document.getElementById('langSwitchBtn');

  if (langBtn && langSwitch) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = langSwitch.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!langSwitch.contains(e.target)) {
        langSwitch.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        langSwitch.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.lang-switch__option, .lang-switch-mobile button').forEach(opt => {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      switchLang(opt.getAttribute('data-lang'));
    });
  });

  applyLangUI();
})();
