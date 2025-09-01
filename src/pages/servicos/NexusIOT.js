import React from 'react';
import './Services.css';
import './NexusIOT.css';

const NexusIOT = () => {
  const featureCards = [
    { src: '/__images/media/placadisuasora.gif', alt: 'Placa Disuasora', label: 'Placa Disuasora' },
    { src: '/__images/media/sensordoor.avif', alt: 'Sensor Portas e Janelas', label: 'Sensor Portas e Janelas' },
    { src: '/__images/media/tablet.webp', alt: 'Painel Touch', label: 'Painel Touch' },
    { src: '/__images/media/siren.gif', alt: 'Sirene Disuasora', label: 'Sirene Disuasora' },
    { src: '/__images/media/pir.jpg', alt: 'Detetor de Movimento', label: 'Detetor de Movimento' }
  ];

  const brandCards = [
    { src: 'https://zilowi.com/wp-content/uploads/2024/09/tuya-smartlife-logo-0.png', alt: 'Tuya / Smart Life' },
    { src: 'https://info.shelly.cloud/wp-content/uploads/2021/07/shelly_logo_blue.png', alt: 'Shelly' },
    { src: 'https://brands.home-assistant.io/_/tplink_tapo//logo.png', alt: 'Tapo' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero iot-hero">
        <img 
          src="https://t4.ftcdn.net/jpg/06/07/34/85/360_F_607348589_NOz22Z8fHjXTXKXBnRWFkGAzuLAHFPTO.jpg" 
          alt="NexusIOT"
        />
        <div className="iot-hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">NexusIOT<span>Alarme sem custos mensais</span></h1>
          <p className="hero-subtitle">Sistema modular, fácil de instalar e compatível com marcas populares.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="iot-section">
        <div className="iot-container">
          <h2 className="iot-section-title">Alarme sem custos mensais</h2>
          <div className="iot-features-grid">
            {featureCards.map((item, index) => (
              <div className="iot-card" key={index}>
                <div className="iot-card-media">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="iot-card-body">
                  <h3>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="iot-section">
        <div className="iot-container">
          <h2 className="iot-section-title">Marcas compatíveis</h2>
          <div className="iot-brands-grid">
            {brandCards.map((brand, index) => (
              <div className="iot-brand-card" key={index}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA removido a pedido */}
    </>
  );
};

export default NexusIOT;
