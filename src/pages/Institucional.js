import React, { useState } from 'react';
import './Institucional.css';

const Institucional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="content">
      {/* Hero Section */}
      <section className="hero">
        <div className="video-wrap">
          <video preload="auto" autoPlay loop muted playsInline id="video-bg">
            <source src="https://kikalabs-server.nexuspt.eu/video/site-nxweb/backtech.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="gradient-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Nova marca Nexus</h1>
          <p className="hero-subtitle">Mudamos para simplificar e representar inovação, sustentabilidade e colaboração!</p>
          <div className="cta-container">
            <button className="cta-button cta-primary" onClick={openModal}>Explorar Serviços</button>
            <a href="/contacto" className="cta-button cta-secondary">Contacte-nos</a>
          </div>
        </div>
      </section>

      {/* A Evolução da Marca */}
      <section className="about-section">
        <div className="container about-content evolucao">
          <div className="about-text">
            <h2>A Evolução da Marca</h2>
            <p>
              Após anos de atividade enquanto NexusWeb, decidimos simplificar a nossa identidade para refletir os valores que realmente nos definem. Agora, como <strong>Nexus</strong>, abraçamos uma marca que simboliza inovação, sustentabilidade, colaboração e união.
            </p>
            <p>
              Nosso novo logótipo foi desenvolvido para transmitir clareza e dinamismo, representando nossa missão de transformar desafios em oportunidades e conectar pessoas com tecnologia de forma eficaz.
            </p>
          </div>
          <div className="about-image">
            <img src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/RealNexusWeb.png" alt="Novo logótipo Nexus" className="evolucao-logo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Inovação & Sustentabilidade */}
      <section className="about-section">
        <div className="container about-content">
          <div className="about-text">
            <h2>Inovação & Sustentabilidade</h2>
            <p>
              Na Nexus, a inovação contínua é a base do nosso trabalho. Desenvolvemos soluções digitais adaptadas às necessidades do mercado, sempre com um firme compromisso com a sustentabilidade.
            </p>
            <p>
              As cores verde e azul do nosso símbolo refletem, respetivamente, a dedicação ao ambiente e a confiança na tecnologia.
            </p>
          </div>
          <div className="about-image">
            <img src="https://assets.aboutamazon.com/dims4/default/b1cb21b/2147483647/strip/true/crop/3000x1689+0+156/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F0c%2F26%2Fab0d78c8452e82266fc8156042d9%2F3442850.jpg" alt="Inovação e Sustentabilidade" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Parcerias Estratégicas */}
      <section className="about-section">
        <div className="container about-content reverse">
          <div className="about-text">
            <h2>Parcerias Estratégicas</h2>
            <p>
              Para liderar a transformação digital, valorizamos parcerias estratégicas que fortalecem nossa capacidade inovadora. Nossa colaboração com a <strong>Kika Labs</strong> exemplifica essa união de competências para criar soluções eficazes.
            </p>
          </div>
          <div className="about-image">
            <img src="https://cdn-icons-png.flaticon.com/128/4710/4710646.png" alt="Parceria com Kika Labs" style={{maxWidth: '150px'}} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Compromisso com Portugal */}
      <section className="about-section">
        <div className="container about-content">
          <div className="about-text">
            <h2>Compromisso com Portugal</h2>
            <p>
              Orgulhosamente portuguesa, a Nexus investe no talento e na criatividade nacionais. Acreditamos que o futuro digital de Portugal passa pelo incentivo à inovação e ao empreendedorismo.
            </p>
            <p>
              Nosso compromisso é contribuir para um ecossistema digital robusto e sustentável, transformando desafios em oportunidades.
            </p>
          </div>
          <div className="about-image">
            <img src="https://clickpetroleoegas.com.br/wp-content/uploads/2024/08/Quer-estudar-tecnologia-garantir-um-emprego-e-ainda-ganhar-750-euros-em-Portugal.jpg" alt="Compromisso com Portugal" loading="lazy" />
          </div>
        </div>
      </section>

      {/* A Visão para o Futuro */}
      <section className="about-section">
        <div className="container about-content reverse">
          <div className="about-text">
            <h2>A Visão para o Futuro</h2>
            <p>
              Com a nova identidade, a Nexus reafirma sua missão de ser pioneira na transformação digital a nível global. Combinamos tecnologia de ponta com criatividade e eficiência para criar soluções que realmente fazem a diferença.
            </p>
            <p>
              Nossa visão é um futuro onde a inovação, a sustentabilidade e a colaboração se unem para potencializar o digital em Portugal e além.
            </p>
          </div>
          <div className="about-image">
            <img src="https://c02.purpledshub.com/uploads/sites/41/2018/08/22-ideas-606ea9b.jpg?w=1029&webp=1" alt="Visão para o Futuro" style={{maxWidth: '600px'}} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Modal dos Serviços */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Os Nossos Serviços</h2>
            <ul>
              <li><a href="/servicos/tv">NexusTV</a> - Entretenimento inovador.</li>
              <li><a href="/servicos/nexuschat">NexusChat</a> - Comunicação inteligente.</li>
              <li><a href="https://mega.nz/file/umZxQJJa#TPhOyeCYCpt_iyLWzmJz3IHXuYVfQ2C0Jeg-lSAFS8o">NexusBrowser</a> - Navegação otimizada.</li>
              <li><a href="https://pets-id-itxs.onrender.com/login">Pets ID</a> - ID para animais de estimação.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Institucional; 