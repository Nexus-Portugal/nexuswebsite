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
  opacity: 0.5;
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

  // Injeta o CSS
  const style = document.createElement('style');
  style.textContent = socialCss + dropdownCss;
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

        <a href="https://my.nexuspt.eu/login" class="client-area" aria-label="Área do Cliente">
          <img src="https://cdn-icons-png.flaticon.com/128/5494/5494944.png" alt="Área do Cliente">
        </a>

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
})();
