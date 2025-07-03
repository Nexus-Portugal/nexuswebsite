import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LoginModal = ({ isOpen, onClose }) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Bloquear scroll quando o modal estiver aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Restaurar scroll quando o modal fechar
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Se o modal não estiver aberto, não renderizar nada
  if (!isOpen) return null;

  // Fechar modal quando clicar fora dele
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        padding: '1rem'
      }}
      onClick={handleOverlayClick}
    >
      <div
        style={{
          backgroundColor: '#0a0e16',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}
      >
        <button 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            transition: 'all 0.3s ease'
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              color: '#ffffff',
              fontSize: '2rem',
              marginBottom: '0.5rem',
              fontWeight: '700'
            }}>
              MyNEXUS
            </h2>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              opacity: '0.8'
            }}>
              Área de Cliente
            </p>
          </div>
          
          <div style={{ padding: '2rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              <span>🚀</span>
            </div>
            <h3 style={{
              color: '#ffffff',
              fontSize: '1.8rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Brevemente
            </h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              lineHeight: '1.6'
            }}>
              A área de cliente MyNEXUS estará disponível em breve.
            </p>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              lineHeight: '1.6'
            }}>
              Fique atento às nossas atualizações!
            </p>
            
            <button
              style={{
                marginTop: '2rem',
                padding: '0.75rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 
