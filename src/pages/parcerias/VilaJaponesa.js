import React, { useEffect } from 'react';
import '../VilaJaponesa.css';

const VilaJaponesa = () => {
  useEffect(() => {
    // Criar partículas no hero
    const createParticles = () => {
      const container = document.getElementById('particles-js');
      if (!container) return;
      
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório entre 2px e 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Opacidade aleatória
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Animação
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="content">
      {/* Hero Section */}
      <section className="partnership-hero">
        <div className="particles" id="particles-js"></div>
        <div className="partnership-hero-content">
          <img src="https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png" 
               alt="Vila Japonesa" 
               className="partnership-logo floating" />
          <h1 className="partnership-hero-title">Parceria Nexus & Vila Japonesa</h1>
          <p className="partnership-hero-subtitle">Um servidor de Minecraft único para explorar, jogar e se divertir</p>
          <a href="https://discord.gg/a5jaYcDQfq" className="btn-discord">
            <i className="fab fa-discord"></i> Entrar no Discord
          </a>
        </div>
      </section>
      
      {/* Partnership Details */}
      <section className="partnership-section">
        <div className="partnership-container">
          <div className="partnership-grid">
            <div className="partnership-content">
              <h2>🌸 Sobre a Vila Japonesa</h2>
              <p>A Vila Japonesa é um servidor de Minecraft que oferece uma experiência única de roleplay imersivo combinada com minigames emocionantes. Nossa parceria traz integração tecnológica e soluções inovadoras para a comunidade de jogadores.</p>
              <p>Com suporte para Java e Bedrock (1.16-1.21.4), o servidor está sempre atualizado com novidades e eventos especiais para manter a comunidade engajada e entretida.</p>
              
              <h3>🎮 O que a torna especial?</h3>
              <ul className="feature-list">
                <li><i className="fas fa-users"></i> Comunidade ativa e acolhedora</li>
                <li><i className="fas fa-sync-alt"></i> Atualizações frequentes</li>
                <li><i className="fas fa-trophy"></i> Eventos e competições regulares</li>
                <li><i className="fas fa-gamepad"></i> Minigames diversificados</li>
                <li><i className="fas fa-theater-masks"></i> Roleplay imersivo</li>
                <li><i className="fas fa-gem"></i> Sistema de economia próprio</li>
                <li><i className="fas fa-home"></i> Construções inspiradas na cultura japonesa</li>
              </ul>
            </div>
            
            <div className="partnership-features">
              <div className="partnership-feature">
                <div className="partnership-feature-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3 className="partnership-feature-title">Mundo Expansivo</h3>
                <p className="partnership-feature-desc">Explore um mapa vasto com diferentes biomas e construções impressionantes inspiradas na cultura japonesa.</p>
              </div>
              
              <div className="partnership-feature">
                <div className="partnership-feature-icon">
                  <i className="fas fa-users-between-lines"></i>
                </div>
                <h3 className="partnership-feature-title">Roleplay Imersivo</h3>
                <p className="partnership-feature-desc">Crie sua própria história com sistemas de economia, profissões e interações sociais avançadas.</p>
              </div>
              
              <div className="partnership-feature">
                <div className="partnership-feature-icon">
                  <i className="fas fa-chess-queen"></i>
                </div>
                <h3 className="partnership-feature-title">Minigames Diversos</h3>
                <p className="partnership-feature-desc">De batalhas PvP a puzzles cooperativos, sempre há algo novo para experimentar.</p>
              </div>
              
              <div className="partnership-feature">
                <div className="partnership-feature-icon">
                  <i className="fas fa-gift"></i>
                </div>
                <h3 className="partnership-feature-title">Eventos Especiais</h3>
                <p className="partnership-feature-desc">Festivais sazonais, competições com prêmios e atividades exclusivas para membros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="partnership-cta">
        <div className="partnership-container partnership-cta-content">
          <h2 className="partnership-cta-title">Junte-se à Comunidade</h2>
          <p className="partnership-cta-subtitle">Conecte-se com jogadores de todo o mundo e comece sua aventura hoje mesmo!</p>
          <a href="https://discord.gg/a5jaYcDQfq" className="btn-discord">
            <i className="fab fa-discord"></i> Entrar no Servidor
          </a>
        </div>
      </section>
    </div>
  );
};

export default VilaJaponesa; 