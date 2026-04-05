import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCameraRetro, faComments, faShareNodes, faFilm, 
  faCommentDots, faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import ScrollGifPlayer from '../../components/ScrollGifPlayer';
import './Drippi.css';

const Drippi = () => {
  const features = [
    {
      icon: faCameraRetro,
      title: "Stories",
      description: "Adiciona uma foto e um texto temporário que desaparece em 24 horas. Perfeito para momentos espontâneos do dia-a-dia."
    },
    {
      icon: faComments,
      title: "Threads",
      description: "Publica textos, inicia discussões e compartilha as tuas ideias com a comunidade. Conecta-te através do diálogo."
    },
    {
      icon: faShareNodes,
      title: "ReDripp",
      description: "Espalha o conteúdo que mais gostas. Mostra aos teus seguidores o que te inspira e descobre novas tendências."
    },
    {
      icon: faFilm,
      title: "Drippies",
      description: "Partilha momentos em vídeos curtos e criativos. Edita no momento, adiciona efeitos e música, e mantém a tua comunidade entretida!"
    },
    {
      icon: faCommentDots,
      title: "Chats",
      description: "Mensagens privadas com os teus amigos, com total privacidade!"
    },
    {
      icon: faLocationDot,
      title: "Localização",
      description: "Partilha e vê a localização dos teus amigos mais chegados."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.wral.com/d0a41328-e9d7-41a5-a1e5-850b38391e0a?w=964&h=542&f=jpg" 
          alt="Fundo Drippi"
        />
        <div className="hero-content">
          <h1 className="hero-title">Drippi by NexusPT</h1>
          <p className="hero-subtitle">Rede Social voltada para os Jovens</p>
          <a href="https://drippi.nexuspt.eu/" className="cta-button">Explorar Drippi</a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <h2 className="welcome-title">Compartilha os teus momentos no Drippi</h2>
        <p className="welcome-text">Captura, conversa e conecta-te de formas inovadoras com a tua comunidade.</p>
        
        {/* GIF com Scroll Interativo */}
        <div style={{ marginBottom: '4rem', marginTop: '2rem' }}>
          <ScrollGifPlayer 
            gifUrl="https://i.ibb.co/C3ZwkMWC/Grava-o-2025-08-15-051321-unscreen.gif" 
            videoUrl="https://kikalabs-server.nexuspt.eu/video/site-nxweb/drippivid.mp4"
            alt="Drippi Demo" 
          />
        </div>
        
        <div className="values-grid drippi-grid">
          {features.map((feature, index) => (
            <div key={index} className="drippi-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Drippi; 