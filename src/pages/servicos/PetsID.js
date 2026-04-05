import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyServicePage from '../../components/LazyServicePage';
import './Services.css';

const PetsID = () => {
  const features = [
    "Registro digital de vacinas e tratamentos",
    "Lembretes para próximas vacinações",
    "Perfil completo do animal",
    "Acesso veterinário compartilhado",
    "Histórico médico completo"
  ];

  return (
    <LazyServicePage>
      {/* Hero Section */}
      <section className="hero">
        <div className="carousel-container">
          <img 
            src="https://t3.ftcdn.net/jpg/08/73/78/44/360_F_873784490_h5C3x1NRc2zigMiX6VmeLeeWZXDaEu21.jpg" 
            alt="Print"
            className="carousel-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Pets ID</h1>
          <p className="hero-subtitle">O boletim digital completo para o teu animal de estimação</p>
          <button className="cta-button" disabled>Aceder Plataforma (Brevemente)</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Gere a saúde do teu pet</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src="https://i.ibb.co/zhT6bX3c/image.png" alt="Interface do Pets ID" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div className="about-features">
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </LazyServicePage>
  );
};

export default PetsID;