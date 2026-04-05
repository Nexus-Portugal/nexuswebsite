import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaw, faGlobe, faTv, faComments, faFilm, faRobot, 
  faGraduationCap, faDroplet, faSyringe, faInfoCircle, faShieldAlt, faRocket,
  faHeadphones, faTabletAlt, faComment, faClock,
  faVideo, faLaptop, faKeyboard, faPalette, faCommentDots,
  faUtensils, faEnvelope, faWallet, faCameraRetro, faRetweet,
  faTachometerAlt, faExclamationTriangle, faFileInvoice,
  faLaptopCode, faChartBar, faCogs, faTint, faCube
} from '@fortawesome/free-solid-svg-icons';
import Marquee from 'react-fast-marquee';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Home.css';
import LazyWrapper from '../components/LazyWrapper';

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

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

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

  // Variante de animação otimizada para LCP
  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.15 }
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
        
        if (data && data.carousel && Array.isArray(data.carousel.slides) && data.carousel.slides.length > 0) {
          const jsonSlides = data.carousel.slides.map(slide => ({
            image: slide.image,
            title: slide.title || '',
            subtitle: slide.subtitle || '',
            link: slide.link || null,
            buttonText: slide.buttonText || 'Saber Mais',
            isDefault: false
          }));
          
          let finalSlides = [];
          
          if (data.carousel.includeDefaultSlides === true) {
            finalSlides = [...defaultSlides, ...jsonSlides];
          } else {
            finalSlides = jsonSlides.length > 0 ? jsonSlides : defaultSlides;
          }
          
          setCarouselSlides(finalSlides);
        } else {
          setCarouselSlides(defaultSlides);
        }
      } catch (err) {
        console.error("Erro ao buscar slides do carousel:", err);
        setCarouselSlides(defaultSlides);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCarouselSlides();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="carousel-container">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {isLoading ? (
                <div className="embla__slide">
                  <div className="loading-slide">
                    <div className="loading-spinner"></div>
                  </div>
                </div>
              ) : (
                carouselSlides.map((slide, index) => (
                  <div className="embla__slide" key={index}>
                    <img
                      src={slide.image}
                      className="carousel-image"
                      alt={slide.title || `Slide ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="embla__dots">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${index === activeSlide ? 'embla__dot--active' : ''}`}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={heroContentVariants}
        >
          {isLoading ? (
            <div className="loading-content">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            carouselSlides.length > 0 && (
              <>
                {carouselSlides[activeSlide]?.isDefault ? (
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
                  <>
                    <motion.h1 className="hero-title" variants={itemVariants}>
                      {carouselSlides[activeSlide]?.title || ""}
                      <motion.span variants={itemVariants}>
                        {carouselSlides[activeSlide]?.subtitle || ""}
                      </motion.span>
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={itemVariants}>
                      {carouselSlides[activeSlide]?.description || ""}
                    </motion.p>
                  </>
                )}
              </>
            )
          )}
        </motion.div>
      </section>

      {/* Welcome Section */}
      <LazyWrapper threshold={0.1}>
        <section className="welcome">
        <h2 className="welcome-title">
          Bem Vindo à Nexus
        </h2>
        <p className="welcome-text">
          Somos uma empresa comprometida com a inovação e a excelência em soluções tecnológicas. 
          Transformamos ideias em realidade para criar ambientes inteligentes e conectados.
        </p>
        
        <div className="values">
          <div className="values-grid">
            <div className="value-item">
              <img
                src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/pessoas.png" 
                alt="Pessoas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <h4>Pessoas no Centro</h4>
            </div>
            <div className="value-item">
              <img
                src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/sustentabilidade.png" 
                alt="Sustentabilidade"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <h4>Sustentabilidade Digital</h4>
            </div>
            <div className="value-item">
              <img
                src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/inovacao.png" 
                alt="Inovação"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <h4>Inovação Contínua</h4>
            </div>
          </div>
        </div>
        </section>
      </LazyWrapper>

      {/* Clients Section */}
      <LazyWrapper threshold={0.1}>
        <section className="clients">
        <h3 className="clients-title">Eles <span>confiam</span> na Nexus:</h3>
        <div className="clients-marquee">
          <Marquee 
            speed={30}
            gradient={false}
            pauseOnHover={true}
            direction="left"
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
                <LazyLoadImage 
                  src={client.image} 
                  alt={client.alt}
                  className="client-logo"
                  effect="blur"
                  height={60}
                />
              </a>
            ))}
          </Marquee>
        </div>
        </section>
      </LazyWrapper>

      {/* Domestic Services Section */}
      <LazyWrapper threshold={0.1}>
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
      </LazyWrapper>

      {/* Corporate Services Section */}
      <LazyWrapper threshold={0.1}>
        <section id="corporate" className="services-section">
        <h2 className="section-title">Para Empresas</h2>
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
      </LazyWrapper>
    </>
  );
};

export default Home; 
