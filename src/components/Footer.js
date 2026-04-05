import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faTiktok, faYoutube, faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>NexusPT - Revolucionando o entretenimento digital</p>
        </div>
        
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul className="footer-links">
            <li><Link to="/servicos/nexuschat">NexusChat</Link></li>
            <li><Link to="/servicos/tv">NexusTV</Link></li>
            <li><Link to="/servicos/nexusia">NexusIA</Link></li>
            <li><Link to="/servicos/petsid">Pets ID</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/termos">Termos de Serviço</Link></li>
            <li><Link to="/privacidade">Política de Privacidade</Link></li>
            <li><Link to="/contacto">Suporte</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/nexuspt.eu/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/Nexuspt_eu" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.tiktok.com/@nexuspt.eu" target="_blank" rel="noopener noreferrer" title="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.youtube.com/@NexusPT-eu" target="_blank" rel="noopener noreferrer" title="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://whatsapp.com/channel/0029VbBuvRVA2pL9IncqrP1l" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://discord.gg/R2ywvBy7jv" target="_blank" rel="noopener noreferrer" title="Discord">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 