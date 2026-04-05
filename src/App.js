import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/LazyLoading.css';
import './styles/Performance.css';

// Componentes fixos
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas com Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Equipa = lazy(() => import('./pages/Equipa'));
const Institucional = lazy(() => import('./pages/Institucional'));
const Termos = lazy(() => import('./pages/Termos'));
const Privacidade = lazy(() => import('./pages/Privacidade'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NxBrowser = lazy(() => import('./pages/NxBrowser'));
const Historia = lazy(() => import('./pages/Historia'));

// Serviços com Lazy Loading
const NexusChat = lazy(() => import('./pages/servicos/NexusChat'));
const NexusTV = lazy(() => import('./pages/servicos/NexusTV'));
const PetsID = lazy(() => import('./pages/servicos/PetsID'));
const NexusIA = lazy(() => import('./pages/servicos/NexusIA'));
const Drippi = lazy(() => import('./pages/servicos/Drippi'));
const NexusIOT = lazy(() => import('./pages/servicos/NexusIOT'));

// Parcerias com Lazy Loading
const VilaJaponesa = lazy(() => import('./pages/parcerias/VilaJaponesa'));

const Loading = () => <div className="loading-screen"><div className="loader"></div></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/equipa" element={<Equipa />} />
              <Route path="/institucional" element={<Institucional />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/nxbrowser" element={<NxBrowser />} />
              <Route path="/historia" element={<Historia />} />
              
              <Route path="/servicos/nexuschat" element={<NexusChat />} />
              <Route path="/servicos/tv" element={<NexusTV />} />
              <Route path="/servicos/petsid" element={<PetsID />} />
              <Route path="/servicos/nexusia" element={<NexusIA />} />
              <Route path="/servicos/drippi" element={<Drippi />} />
              <Route path="/servicos/nexusiot" element={<NexusIOT />} />
              
              <Route path="/parcerias/vilajaponesa" element={<VilaJaponesa />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
