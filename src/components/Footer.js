import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    </footer>
  );
};

export default Footer; 
