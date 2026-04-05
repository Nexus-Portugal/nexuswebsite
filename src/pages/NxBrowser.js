import React from 'react';
import './NxBrowser.css';

const NxBrowser = () => {
  return (
    <div className="content">
      <section className="hero">
        <div className="container">
          <h1>NexusBrowser</h1>
          <p>O navegador rápido, seguro e privativo desenvolvido para oferecer a melhor experiência na web sem comprometer sua privacidade.</p>
          <a href="https://drive.google.com/file/d/1sdy1BHZ314diszckPk4jchtORxQHgLlG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="download-btn">Download Gratuito</a>
        </div>
      </section>
      
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Porquê escolher o NexusBrowser</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Velocidade Extrema</h3>
              <p>Motor de renderização otimizado que carrega páginas em tempo recorde, mesmo com múltiplos tabs abertos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Segurança Robustecida</h3>
              <p>Proteção avançada contra malware, phishing e ataques na web, mantendo seus dados sempre seguros.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Privacidade Garantida</h3>
              <p>Bloqueio automático de rastreadores e anúncios intrusivos, sem coletar seus dados de navegação.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Extensões Compatíveis</h3>
              <p>Suporte às principais extensões do Chrome Web Store para personalizar sua experiência.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3>Pouco Uso de Memória</h3>
              <p>Arquitetura eficiente que consome menos recursos do seu sistema comparado a outros navegadores.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Sincronização Multiplataforma</h3>
              <p>Acesse seus favoritos, histórico e configurações em todos os seus dispositivos de forma segura.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="download" className="download-section">
        <div className="container">
          <h2>Baixe o NexusBrowser Agora</h2>
          <p>Disponível para todas as principais plataformas</p>
          
          <div className="platforms">
            <a href="https://drive.google.com/file/d/1sdy1BHZ314diszckPk4jchtORxQHgLlG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="platform-btn">Windows</a>
            <span className="platform-btn disabled">macOS (Brevemente)</span>
            <span className="platform-btn disabled">Linux (Brevemente)</span>
            <span className="platform-btn disabled">Android (Brevemente)</span>
            <span className="platform-btn disabled">iOS (Brevemente)</span>
          </div>
          
          <div className="version-info">
            Versão atual: 1.35.0 | Tamanho: 116MB | Atualizado em: 06/04/2025
          </div>
          
          <div className="legal-notice">
            Ao baixar e usar o NexusBrowser, você concorda com os <a href="/termos">Termos de Serviço</a> e <a href="/privacidade">Política de Privacidade</a>.
          </div>
        </div>
      </section>
    </div>
  );
};

export default NxBrowser; 