import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaw, faGlobe, faTv, faComments, faFilm, faRobot, 
  faGraduationCap, faDroplet, faTint, faCube,
  faSyringe, faInfoCircle, faShieldAlt, faRocket,
  faHeadphones, faTabletAlt, faComment, faClock,
  faVideo, faLaptop, faKeyboard, faPalette, faCommentDots,
  faUtensils, faEnvelope, faWallet, faCameraRetro, faRetweet,
  faTachometerAlt, faExclamationTriangle, faFileInvoice,
  faLaptopCode, faChartBar, faCogs
} from '@fortawesome/free-solid-svg-icons';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Home.css';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slides padrão para mostrar se não houver slides do JSON ou ocorrer um erro
  const defaultSlides = [
    {
      image: "/__images/slider/slide1.webp",
      isDefault: true
    },
    {
      image: "/__images/slider/slide2.webp",
      isDefault: true
    },
    {
      image: "/__images/slider/slide3.webp",
      isDefault: true
    }
  ];

  const clientLogos = [
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png",
      link: "https://vilajaponesa.pt",
      alt: "Vila Japonesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilaportuguesa/vilapt.png",
      link: "#",
      alt: "Vila Portuguesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/ggstudios.webp",
      link: "https://ggs.studios.nexuspt.eu",
      alt: "GgStudios"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-minerustico/logo.png",
      link: "https://minerustico.nexuspt.eu/",
      alt: "Minerustico"
    },
    {
      image: "https://i.ibb.co/JWfBC0HW/image.png",
      link: "#",
      alt: "Dogge"
    },
    {
      image: "https://i.ibb.co/d0p2G68n/image.png",
      link: "https://aehs.edu.pt",
      alt: "AEHS"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png",
      link: "https://vilajaponesa.pt",
      alt: "Vila Japonesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilaportuguesa/vilapt.png",
      link: "#",
      alt: "Vila Portuguesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/ggstudios.webp",
      link: "https://ggs.studios.nexuspt.eu",
      alt: "GgStudios"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-minerustico/logo.png",
      link: "https://minerustico.nexuspt.eu/",
      alt: "Minerustico"
    },
    {
      image: "https://i.ibb.co/JWfBC0HW/image.png",
      link: "#",
      alt: "Dogge"
    },
    {
      image: "https://i.ibb.co/d0p2G68n/image.png",
      link: "https://aehs.edu.pt",
      alt: "AEHS"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png",
      link: "https://vilajaponesa.pt",
      alt: "Vila Japonesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilaportuguesa/vilapt.png",
      link: "#",
      alt: "Vila Portuguesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/ggstudios.webp",
      link: "https://ggs.studios.nexuspt.eu",
      alt: "GgStudios"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-minerustico/logo.png",
      link: "https://minerustico.nexuspt.eu/",
      alt: "Minerustico"
    },
    {
      image: "https://i.ibb.co/JWfBC0HW/image.png",
      link: "#",
      alt: "Dogge"
    },
    {
      image: "https://i.ibb.co/d0p2G68n/image.png",
      link: "https://aehs.edu.pt",
      alt: "AEHS"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png",
      link: "https://vilajaponesa.pt",
      alt: "Vila Japonesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilaportuguesa/vilapt.png",
      link: "#",
      alt: "Vila Portuguesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/ggstudios.webp",
      link: "https://ggs.studios.nexuspt.eu",
      alt: "GgStudios"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-minerustico/logo.png",
      link: "https://minerustico.nexuspt.eu/",
      alt: "Minerustico"
    },
    {
      image: "https://i.ibb.co/JWfBC0HW/image.png",
      link: "#",
      alt: "Dogge"
    },
    {
      image: "https://i.ibb.co/d0p2G68n/image.png",
      link: "https://aehs.edu.pt",
      alt: "AEHS"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilajaponesa/vilajaponesalogo.png",
      link: "https://vilajaponesa.pt",
      alt: "Vila Japonesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-vilaportuguesa/vilapt.png",
      link: "#",
      alt: "Vila Portuguesa"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/ggstudios.webp",
      link: "https://ggs.studios.nexuspt.eu",
      alt: "GgStudios"
    },
    {
      image: "https://kikalabs-server.nexuspt.eu/images/site-minerustico/logo.png",
      link: "https://minerustico.nexuspt.eu/",
      alt: "Minerustico"
    },
    {
      image: "https://i.ibb.co/JWfBC0HW/image.png",
      link: "#",
      alt: "Dogge"
    },
    {
      image: "https://i.ibb.co/d0p2G68n/image.png",
      link: "https://aehs.edu.pt",
      alt: "AEHS"
    }
  ];

  const domesticServices = [
    {
      icon: faPaw,
      title: "Pets ID",
      description: "Registo digital do seu animal",
      features: [
        { icon: faSyringe, text: "Lembrete de vacinas" },
        { icon: faInfoCircle, text: "Dados do pet" }
      ]
    },
    {
      icon: faRobot,
      title: "NexusIOT",
      description: "Alarme sem custos mensais",
      features: [
        { icon: faShieldAlt, text: "Sirene dissuasora" },
        { icon: faTabletAlt, text: "Painel touch" }
      ]
    },
    {
      icon: faGlobe,
      title: "NexusBrowser",
      description: "Navegação simplificada",
      features: [
        { icon: faShieldAlt, text: "Proteção básica" },
        { icon: faRocket, text: "Rápido e leve" }
      ]
    },
    {
      icon: faTv,
      title: "NexusTV",
      description: "Acesso a conteúdos TV",
      features: [
        { icon: faHeadphones, text: "Canais de rádio" },
        { icon: faTv, text: "Canais em direto" },
        { icon: faTabletAlt, text: "Multiplataforma" }
      ]
    },
    {
      icon: faComments,
      title: "NexusChat",
      description: "Mensagens instantâneas",
      features: [
        { icon: faComment, text: "Chat privado" },
        { icon: faClock, text: "Histórico de conversas" }
      ]
    },
    {
      icon: faFilm,
      title: "NexusFilms",
      description: "Plataforma de streaming",
      features: [
        { icon: faVideo, text: "Catálogo diversificado" },
        { icon: faLaptop, text: "Acesso multiplataforma" }
      ]
    },
    {
      icon: faRobot,
      title: "NexusAI",
      description: "Assistente de texto e imagem",
      features: [
        { icon: faKeyboard, text: "Geração de texto" },
        { icon: faPalette, text: "Criação de imagens" },
        { icon: faCommentDots, text: "Interface conversacional" }
      ]
    },
    {
      icon: faGraduationCap,
      title: "Giae by Nexus",
      description: "Plataforma gestão escolar",
      features: [
        { icon: faClock, text: "Consultar Horário" },
        { icon: faUtensils, text: "Aquisição de senha" },
        { icon: faEnvelope, text: "Notificações" },
        { icon: faWallet, text: "Consultar Saldo" }
      ]
    },
    {
      icon: faDroplet,
      title: "Drippi",
      description: "Plataforma de rede social",
      features: [
        { icon: faCameraRetro, text: "Stories" },
        { icon: faComments, text: "Threads" },
        { icon: faRetweet, text: "ReDripp" },
        { icon: faFilm, text: "Drippies" }
      ]
    }
  ];

  const corporateServices = [
    {
      icon: faTint,
      title: "NexusWR",
      description: "Gestão de leituras de água",
      features: [
        { icon: faTachometerAlt, text: "Registo de consumos" },
        { icon: faExclamationTriangle, text: "Reporte de anomalias" },
        { icon: faFileInvoice, text: "Verificação de faturas" }
      ]
    },
    {
      icon: faCube,
      title: "Soluções Custom",
      description: "Desenvolvimento à medida",
      features: [
        { icon: faLaptopCode, text: "Aplicações web" },
        { icon: faChartBar, text: "Dashboards analíticos" },
        { icon: faCogs, text: "Integrações API" }
      ]
    }
  ];

  // Variante de animação para os elementos do hero
  const heroContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Efeito para buscar os slides do JSON
  useEffect(() => {
    const fetchCarouselSlides = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://kikalabs-server.nexuspt.eu/json/site-nxweb/menuconf.json');
        
        if (!response.ok) {
          throw new Error(`Erro ao buscar slides: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Verifica se há slides no JSON e se são válidos
        if (data && data.carousel && Array.isArray(data.carousel.slides) && data.carousel.slides.length > 0) {
          // Processa os slides do JSON
          const jsonSlides = data.carousel.slides.map(slide => ({
            image: slide.image,
            title: slide.title || '',
            subtitle: slide.subtitle || '',
            link: slide.link || null,
            buttonText: slide.buttonText || 'Saber Mais',
            isDefault: false
          }));
          
          let finalSlides = [];
          
          // Verifica se deve combinar os slides padrão com os do JSON
          if (data.carousel.includeDefaultSlides === true) {
            // Usa os slides padrão e adiciona os do JSON
            finalSlides = [...defaultSlides, ...jsonSlides];
          } else {
            // Usa apenas os slides do JSON, se houver, ou os padrão se não houver
            finalSlides = jsonSlides.length > 0 ? jsonSlides : defaultSlides;
          }
          
          setCarouselSlides(finalSlides);
        } else {
          // Se não houver slides válidos no JSON, usa os padrão
          setCarouselSlides(defaultSlides);
        }
      } catch (err) {
        console.error("Erro ao buscar slides do carousel:", err);
        setError(err.message);
        // Em caso de erro, usa os slides padrão
        setCarouselSlides(defaultSlides);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCarouselSlides();
  }, []);

  // Efeito para aplicar a classe transitioning durante a transição
  useEffect(() => {
    if (carouselRef.current) {
      const handleSlideChangeStart = () => {
        setIsTransitioning(true);
      };

      const handleSlideChangeEnd = () => {
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      };

      const swiperInstance = carouselRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.on('slideChangeTransitionStart', handleSlideChangeStart);
        swiperInstance.on('slideChangeTransitionEnd', handleSlideChangeEnd);
      }

      return () => {
        if (swiperInstance) {
          swiperInstance.off('slideChangeTransitionStart', handleSlideChangeStart);
          swiperInstance.off('slideChangeTransitionEnd', handleSlideChangeEnd);
        }
      };
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className={`carousel ${isTransitioning ? 'transitioning' : ''}`}>
          <Swiper
            ref={carouselRef}
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              }
            }}
            loop={true}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={1000}
            onSlideChange={(s) => setActiveSlide(s.realIndex)}
          >
            {isLoading ? (
              // Mostrar slides de carregamento
              <SwiperSlide>
                <div className="loading-slide">
                  <div className="loading-spinner"></div>
                </div>
              </SwiperSlide>
            ) : (
              // Mostrar slides do carousel
              carouselSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={slide.image} 
                    className="carousel-image" 
                    alt={slide.title || `Slide ${index + 1}`} 
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={heroContentVariants}
        >
          {!isLoading && carouselSlides.length > 0 && (
            <>
              {/* Verifica se é um slide padrão ou personalizado */}
              {carouselSlides[activeSlide]?.isDefault ? (
                // Conteúdo original para slides padrão
                <>
                  <motion.h1 className="hero-title" variants={itemVariants}>
                    Nexus Solutions
                    <motion.span variants={itemVariants}>Inovação Tecnológica</motion.span>
                  </motion.h1>
                  <motion.p className="hero-subtitle" variants={itemVariants}>
                    Soluções personalizadas para residências e empresas
                  </motion.p>
                </>
              ) : (
                // Conteúdo dinâmico para slides do JSON
                <>
                  <motion.h1 className="hero-title" variants={itemVariants}>
                    {carouselSlides[activeSlide]?.title || ""}
                    <motion.span variants={itemVariants}>
                      {carouselSlides[activeSlide]?.subtitle || ""}
                    </motion.span>
                  </motion.h1>
                  
                  {carouselSlides[activeSlide]?.link && (
                    <motion.div variants={itemVariants} className="hero-cta">
                      <a 
                        href={carouselSlides[activeSlide].link} 
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {carouselSlides[activeSlide].buttonText || "Saber Mais"}
                      </a>
                    </motion.div>
                  )}
                </>
              )}
            </>
          )}
        </motion.div>
        
        <div className="swiper-controls-wrapper">
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <motion.h2 
          className="welcome-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Bem Vindo à Nexus
        </motion.h2>
        <motion.p 
          className="welcome-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Somos uma empresa comprometida com a inovação e a excelência em soluções tecnológicas. 
          Transformamos ideias em realidade para criar ambientes inteligentes e conectados.
        </motion.p>
        
        <div className="values">
          <div className="values-grid">
            <div className="value-item">
              <img 
                src="http://kikalabs-server.nexuspt.eu/images/site-nxweb/pessoas.png" 
                alt="Pessoas"
                loading="lazy"
              />
              <h4>Pessoas no Centro</h4>
            </div>
            <div className="value-item">
              <img 
                src="http://kikalabs-server.nexuspt.eu/images/site-nxweb/sustentabilidade.png" 
                alt="Sustentabilidade"
                loading="lazy"
              />
              <h4>Sustentabilidade Digital</h4>
            </div>
            <div className="value-item">
              <img 
                src="http://kikalabs-server.nexuspt.eu/images/site-nxweb/inovacao.png" 
                alt="Inovação"
                loading="lazy"
              />
              <h4>Inovação Contínua</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3 className="clients-title">Eles <span>confiam</span> na Nexus:</h3>
        <div className="clients-marquee">
          <Marquee 
            speed={40}
            gradient={false}
            pauseOnHover={true}
            className="clients-track"
          >
            {clientLogos.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-link"
                title={client.alt}
              >
                <img 
                  src={client.image} 
                  alt={client.alt}
                  className="client-logo"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Domestic Services Section */}
      <section id="domestic" className="services-section">
        <h2 className="section-title">Para Casa</h2>
        <div className="services-grid">
          {domesticServices.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FontAwesomeIcon icon={feature.icon} />
                    {' ' + feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Services Section */}
      <section id="corporate" className="services-section">
        <h2 className="section-title">Soluções Corporativas</h2>
        <div className="services-grid">
          {corporateServices.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FontAwesomeIcon icon={feature.icon} />
                    {' ' + feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home; 
