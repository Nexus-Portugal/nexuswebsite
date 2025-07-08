import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CertificateModal = ({ isOpen, onClose, certificateUrl, memberName }) => {
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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
          padding: '1.5rem',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: 'auto',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
      >
        <button 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0, 0, 0, 0.7)',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            zIndex: 1
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.7)';
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            margin: '0 0 0.5rem 0',
            fontWeight: '600'
          }}>
            Certificado - {memberName}
          </h3>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: '70vh',
          overflow: 'auto'
        }}>
          <img
            src={certificateUrl}
            alt={`Certificado de ${memberName}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateModal; 
