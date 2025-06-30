import React from 'react';
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
    <>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://t3.ftcdn.net/jpg/08/73/78/44/360_F_873784490_h5C3x1NRc2zigMiX6VmeLeeWZXDaEu21.jpg" 
          alt="Print"
        />
        <div className="hero-content">
          <h1 className="hero-title">Pets ID</h1>
          <p className="hero-subtitle">O boletim digital completo para o seu animal de estimação</p>
          <a href="#" className="cta-button">Aceder Plataforma</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Gerencie a saúde do seu pet</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src="https://i.ibb.co/zhT6bX3c/image.png" alt="Interface do Pets ID" />
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
    </>
  );
};

export default PetsID; 