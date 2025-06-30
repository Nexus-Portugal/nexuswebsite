import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faShieldAlt, faExclamationTriangle, 
  faLock, faCommentAlt, faCode 
} from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  const [activeTab, setActiveTab] = useState('form');

  useEffect(() => {
    // Carregar o script POWR
    const script = document.createElement('script');
    script.src = 'https://www.powr.io/powr.js?platform=html';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const emailContacts = [
    {
      category: "Geral",
      email: "geral@nexuspt.eu",
      icon: faEnvelope
    },
    {
      category: "Privacidade",
      email: "dados@nexuspt.eu",
      icon: faShieldAlt
    },
    {
      category: "Phishing",
      email: "phishing@nexuspt.eu",
      icon: faExclamationTriangle
    },
    {
      category: "CIMESIS (Segurança)",
      email: "reportesit.cimesis@nexuspt.eu",
      icon: faLock
    },
    {
      category: "Sugestões e Reclamações",
      email: "sugestoes@nexuspt.eu",
      icon: faCommentAlt
    },
    {
      category: "Developers IoT",
      email: "developers.iot@nexuspt.eu",
      icon: faCode
    }
  ];

  return (
    <div className="content">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contacte a Nexus</h1>
          <p>Tem alguma questão ou sugestão? Estamos aqui para ajudar.</p>
        </div>

        <div className="contact-tabs">
          <div 
            className={`contact-tab ${activeTab === 'form' ? 'active' : ''}`}
            onClick={() => setActiveTab('form')}
          >
            Formulário
          </div>
          <div 
            className={`contact-tab ${activeTab === 'email' ? 'active' : ''}`}
            onClick={() => setActiveTab('email')}
          >
            E-mail
          </div>
        </div>

        <div className="contact-options">
          {/* Formulário de Contacto POWR */}
          <div className="contact-card" style={{ display: activeTab === 'form' ? 'block' : 'none' }}>
            <h2>Envie-nos uma mensagem</h2>
            <p>Preencha o formulário abaixo e entraremos em contacto consigo brevemente.</p>
            
            {/* Elemento do formulário POWR */}
            <div className="powr-contact-form" id="e14e2712_1737487454"></div>
          </div>

          {/* Contactos por E-mail */}
          <div className="contact-card" style={{ display: activeTab === 'email' ? 'block' : 'none' }}>
            <h2>Contacte-nos por E-mail</h2>
            <p>Selecione o departamento adequado para o seu contacto.</p>
            
            <ul className="email-list">
              {emailContacts.map((contact, index) => (
                <li key={index} className="email-item">
                  <span className="email-category">{contact.category}</span>
                  <a href={`mailto:${contact.email}`} className="email-address">
                    <FontAwesomeIcon icon={contact.icon} />
                    <span>{contact.email}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 