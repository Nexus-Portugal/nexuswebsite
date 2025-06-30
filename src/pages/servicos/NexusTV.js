import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const NexusTV = () => {
  const features = [
    "Canais nacionais em direto",
    "Biblioteca de filmes atualizada",
    "Estações de rádio variadas",
    "Conteúdo sob demanda",
    "Atualizações constantes"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://t4.ftcdn.net/jpg/10/11/85/53/360_F_1011855320_RQwxR76hHxsE9hHUp7FEaDx41M1i5k2T.jpg" 
          alt="Plataforma de streaming"
        />
        <div className="hero-content">
          <h1 className="hero-title">NexusTV</h1>
          <p className="hero-subtitle">Sua plataforma completa de entretenimento digital</p>
          <a href="https://tv.nexuspt.eu" className="cta-button">Acessar NexusTV</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Conteúdo Diversificado</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src="https://i.ibb.co/qMcZWhfx/image.png" alt="Interface NexusTV" />
            </div>
            <div className="about-features">
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="https://tvnexusweb.netlify.app" className="cta-button">Experimente Grátis</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NexusTV; 