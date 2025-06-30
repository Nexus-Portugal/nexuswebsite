import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, faBolt, faDatabase, faImage 
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Services.css';

const NexusIA = () => {
  const features = [
    { icon: faBrain, text: "Vasto conhecimento" },
    { icon: faBolt, text: "Resposta rápida" },
    { icon: faDatabase, text: "Memória" },
    { icon: faImage, text: "Geração de imagens" },
    { icon: faDiscord, text: "Integrações Discord (contacte-nos)" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://investingnews.com/media-library/person-using-laptop-with-generative-ai-chatgpt-and-other-symbols-floating-between-them.jpg?id=53504588&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0" 
          alt="I.A"
        />
        <div className="hero-content">
          <h1 className="hero-title">NexusIA</h1>
          <p className="hero-subtitle">O teu assistente pessoal, agora com I.A</p>
          <a href="https://chat.ia.nexuspt.eu" className="cta-button">Aceder ao NexusIA</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Inteligência Artificial da Nexus</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src="https://i.ibb.co/PZTnW52x/image.png" alt="Interface NexusIA" />
            </div>
            <div className="about-features">
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={feature.icon} />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a href="https://chat.ia.nexuspt.eu" className="cta-button">Aceder ao serviço</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NexusIA; 