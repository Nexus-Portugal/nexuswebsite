import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

// Páginas
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Equipa from './pages/Equipa';
import Institucional from './pages/Institucional';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Cookies from './pages/Cookies';
import NxBrowser from './pages/NxBrowser';

// Páginas de Serviços
import NexusChat from './pages/servicos/NexusChat';
import NexusTV from './pages/servicos/NexusTV';
import PetsID from './pages/servicos/PetsID';
import NexusIA from './pages/servicos/NexusIA';
import Drippi from './pages/servicos/Drippi';

// Páginas de Parcerias
import VilaJaponesa from './pages/parcerias/VilaJaponesa';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header onLoginClick={openLoginModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/equipa" element={<Equipa />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/nxbrowser" element={<NxBrowser />} />
            
            {/* Rotas de Serviços */}
            <Route path="/servicos/nexuschat" element={<NexusChat />} />
            <Route path="/servicos/tv" element={<NexusTV />} />
            <Route path="/servicos/petsid" element={<PetsID />} />
            <Route path="/servicos/nexusia" element={<NexusIA />} />
            <Route path="/servicos/drippi" element={<Drippi />} />
            
            {/* Rotas de Parcerias */}
            <Route path="/parcerias/vilajaponesa" element={<VilaJaponesa />} />
          </Routes>
        </main>
        <Footer />
        
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={closeLoginModal} 
        />
      </div>
    </Router>
  );
}

export default App;
