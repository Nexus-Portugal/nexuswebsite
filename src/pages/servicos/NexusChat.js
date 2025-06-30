import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCommentDots, faLock, faHistory,
  faComments, faShieldAlt, faRocket, 
  faMobileAlt, faDesktop, faTabletAlt 
} from '@fortawesome/free-solid-svg-icons';

const NexusChat = () => {
  const features = [
    {
      icon: faCommentDots,
      title: "Chat em tempo real",
      description: "Comunicação instantânea"
    },
    {
      icon: faLock,
      title: "Seguro",
      description: "Mensagens protegidas"
    },
    {
      icon: faHistory,
      title: "Histórico de Chats",
      description: "Acesso às conversas anteriores"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://cdn.create.vista.com/api/media/small/212462542/stock-photo-women-hand-using-smartphone-typing-chatting-conversation-chat-box-icons" 
          alt="Fundo NexusChat"
        />
        <div className="hero-content">
          <h1 className="hero-title">NexusChat</h1>
          <p className="hero-subtitle">O seu chat inteligente, rápido e seguro</p>
          <a href="https://chat.nexuspt.eu" className="cta-button">Explorar NexusChat</a>
        </div>
      </section>

      {/* Seção de Apresentação */}
      <section className="welcome">
        <h2 className="welcome-title">Experimente a NexusChat</h2>
        <p className="welcome-text">
          Comunicação instantânea e segura para todas as suas necessidades.
        </p>
        
        <div className="values-grid">
          {features.map((feature, index) => (
            <div key={index} className="value-item">
              <FontAwesomeIcon icon={feature.icon} style={{ fontSize: '3rem' }} />
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Funcionalidades */}
      <section className="services-section">
        <h2 className="section-title">Funcionalidades Principais</h2>
        <div className="services-grid">
          <div className="service-card">
            <FontAwesomeIcon icon={faComments} className="service-icon" />
            <h3>Chat Privado</h3>
            <p>Conversas seguras e privadas</p>
            <ul className="feature-list">
              <li><FontAwesomeIcon icon={faShieldAlt} /> Criptografia de ponta</li>
              <li><FontAwesomeIcon icon={faRocket} /> Mensagens instantâneas</li>
            </ul>
          </div>
          
          <div className="service-card">
            <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
            <h3>Multiplataforma</h3>
            <p>Acesso em qualquer dispositivo</p>
            <ul className="feature-list">
              <li><FontAwesomeIcon icon={faDesktop} /> Versão desktop</li>
              <li><FontAwesomeIcon icon={faTabletAlt} /> Versão mobile</li>
            </ul>
          </div>
          
          <div className="service-card">
            <FontAwesomeIcon icon={faHistory} className="service-icon" />
            <h3>Histórico Completo</h3>
            <p>Acesso às conversas anteriores</p>
            <ul className="feature-list">
              <li><FontAwesomeIcon icon={faShieldAlt} /> Backup automático</li>
              <li><FontAwesomeIcon icon={faComments} /> Sincronização em tempo real</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default NexusChat; 