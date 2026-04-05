import React from 'react';
import './Historia.css';

const Historia = () => {
  const timeline = [
    {
      year: '2020',
      title: 'GamesStudios',
      image: 'https://i.ibb.co/PvFQgFr4/Games-Studio.png',
      description:
        'Foi aqui que tudo começou, originalmente com o nome GameStudios. Era um estúdio simples de criação de mods para FNF com o nosso co‑fundador Diogo; também desenvolvemos alguns jogos no Roblox.'
    },
    {
      year: '2021',
      title: 'Flux Labs',
      image: 'https://i.ibb.co/nMNt18YM/Flux-LABS-2021-completed-logo.png',
      description:
        'Foi aqui que redefinimos o nosso rumo, ainda focados principalmente no Roblox, mas já com alguns projetos orientados para a tecnologia.'
    },
    {
      year: '2021',
      title: 'Flux (novo logótipo)',
      image: 'https://i.ibb.co/mnkL7Z4/Flux-LOGOV3.png',
      description:
        'Alterámos a nossa identidade visual mais uma vez, para refletir de forma crescente a tecnologia e as soluções que, à data, ainda eram básicas, relacionadas com tecnologia e sites personalizados.'
    },
    {
      year: '2022',
      title: 'TAMTW',
      image: 'https://i.ibb.co/PzgNKKmf/image.png',
      description:
        'Decidimos renovar a marca mais uma vez; esta foi a que teve menos resultados, devido a uma co‑liderança frágil.'
    },
    {
      year: '2023',
      title: 'NexusWeb',
      image: 'https://i.ibb.co/FGWrbWj/Only-Logo-Zoom.png',
      description:
        'Realizámos um rebranding completo, com o aparecimento de várias novas tecnologias e sites personalizados. Queríamos pôr fim às inconsistências nos nossos nomes anteriores e conduzir a atual NexusPT para um caminho cada vez mais tecnológico e inovador.'
    },
    {
      year: '2024',
      title: 'NexusPT (simplificação do nome)',
      image: 'https://i.ibb.co/yBMfPBtC/Nexus-Afastado.png',
      description:
        'Este foi o nosso último rebranding, reforçando a consistência no nome e no logótipo, refletindo os nossos valores tecnológicos e inovadores, com soluções utilizadas por muitas pessoas e com o objetivo de alcançar novas parcerias, estratégias, desenvolvimento e uma boa liderança.'
    },
    {
      year: 'Abr. 2025',
      title: 'Drippi',
      image:
        'https://i.ibb.co/Kj3pHchp/file-0000000088a0624685cfc856e9a6951c-removebg-preview.png',
      description:
        'Desenvolvemos a nossa primeira rede social, com tecnologias recentes e através de uma escuta ativa às críticas e sugestões da comunidade, resolvendo proativamente quaisquer bugs. Consideramo‑nos inovadores neste marco.'
    },
    {
      year: 'Jun. 2025',
      title: 'NexusIOT',
      image: 'https://i.ibb.co/YGFSNsL/IoTnEXUS.png',
      description:
        'Começámos o desenvolvimento do NexusIOT, uma plataforma de IoT e, posteriormente, de alarmes, para tornar a casa dos nossos clientes mais inteligente. Uma casa "inteligente" em que é necessário ter duas ou três apps não é realmente inteligente; foi esse o propósito do NexusIOT, para além da proteção com alarmes anti‑intrusão inovadores, com equipamentos físicos e fiáveis.'
    }
  ];

  return (
    <main className="history-main">
      <section className="history-section">
        <h1 className="section-title">A Nossa História</h1>
        <p className="history-intro">Uma cronologia dos marcos que moldaram a Nexus.</p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <article key={`${item.year}-${index}`} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-year">{item.year}</span>
                  <h2 className="timeline-title">{item.title}</h2>
                </div>
                <div className="timeline-body">
                  {item.image && (
                    <img
                      className="timeline-image"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Historia;


