import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyServicePage from '../../components/LazyServicePage';
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
    <LazyServicePage>
      {/* Hero Section */}
      <section className="hero">
        <div className="carousel-container">
          <img 
            src="https://t4.ftcdn.net/jpg/10/11/85/53/360_F_1011855320_RQwxR76hHxsE9hHUp7FEaDx41M1i5k2T.jpg" 
            alt="Plataforma de streaming"
            className="carousel-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">NexusTV</h1>
          <p className="hero-subtitle">A tua plataforma recheada de entretenimento digital nacional</p>
          <button className="cta-button" disabled>Aceder Plataforma (Brevemente)</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Conteúdo Diversificado</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src="https://i.ibb.co/Xrd0YqZr/image.png" alt="Interface NexusTV" style={{width: '100%', height: 'auto', display: 'block'}} />
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
    </LazyServicePage>
  );
};

export default NexusTV;
