import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import OptimizedImage from './OptimizedImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMyNexus = () => {
    window.open('https://my.nexuspt.eu', '_blank');
    setIsMenuOpen(false); // Fechar menu mobile se estiver aberto
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add resize event listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 300 : 0,
      y: isMobile ? 0 : -20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: isMobile ? 300 : 0,
      y: isMobile ? 0 : -20,
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut" 
      }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut" 
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  // Custom dropdown component
  const DropdownMenu = ({ title, children, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      if (isMobile) {
        setIsOpen(!isOpen);
      }
    };

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsOpen(false);
      }
    };

    return (
      <li 
        className={`dropdown ${isOpen ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="dropdown-trigger"
          onClick={toggleDropdown}
        >
          <span className="menu-link">
            {title} <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="submenu"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {children}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={logoVariants}
        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        <Link to="/" className="logo-link">
          <OptimizedImage 
            src="https://kikalabs-server.nexuspt.eu/images/site-nxweb/RealNexusWeb.png" 
            alt="Nexus" 
            className="logo"
            height={40}
          />
        </Link>
        {!isMobile && (
          <span className="logo-text">NexusPT</span>
        )}
      </motion.div>
      
      <nav className="nav-menu">
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          <span className="hamburger-box">
            <span className={`hamburger-inner ${isMenuOpen ? 'active' : ''}`}></span>
          </span>
        </button>
        
        <AnimatePresence>
          {(isMenuOpen || !isMobile) && (
            <motion.ul 
              className={`nav-list ${isMenuOpen ? 'active' : ''}`}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DropdownMenu title="Serviços" name="servicos">
                <li><Link to="/servicos/nexuschat" onClick={() => setIsMenuOpen(false)}>NexusChat</Link></li>
                <li><Link to="/servicos/tv" onClick={() => setIsMenuOpen(false)}>NexusTV</Link></li>
                <li><Link to="/servicos/petsid" onClick={() => setIsMenuOpen(false)}>Pets ID</Link></li>
                <li><Link to="/servicos/nexusia" onClick={() => setIsMenuOpen(false)}>NexusIA</Link></li>
                <li><Link to="/servicos/drippi" onClick={() => setIsMenuOpen(false)}>Drippi</Link></li>
                <li><Link to="/servicos/nexusiot" onClick={() => setIsMenuOpen(false)}>NexusIOT</Link></li>
              </DropdownMenu>
              
              <DropdownMenu title="Parcerias" name="parcerias">
                <li><Link to="/parcerias/vilajaponesa" onClick={() => setIsMenuOpen(false)}>Vila Japonesa</Link></li>
              </DropdownMenu>
              
              <motion.li 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/equipa" onClick={() => setIsMenuOpen(false)}>Equipa</Link>
              </motion.li>
              
              <motion.li 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/historia" onClick={() => setIsMenuOpen(false)}>História</Link>
              </motion.li>
              
              <motion.li 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              </motion.li>
              
              <motion.li 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span 
                  onClick={openMyNexus}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/5494/5494944.png" 
                    alt="MyNEXUS"
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                    loading="lazy"
                  />
                </span>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;