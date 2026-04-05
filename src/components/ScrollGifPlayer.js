import React, { useRef, useEffect, useState } from 'react';

const ScrollGifPlayer = ({ gifUrl, videoUrl, alt = "Vídeo/Gif animado" }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const targetPercentRef = useRef(0);
  const animationFrameRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTimeRef = useRef(0);

  // Atualiza o scroll percent baseado na posição do vídeo na viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Cálcula quanto do vídeo está visível (0 = topo fora, 1 = já saiu)
      let percent = 0;
      
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Vídeo está na viewport
        percent = (windowHeight - rect.top) / (windowHeight + rect.height);
      } else if (rect.top <= 0) {
        // Vídeo já passou
        percent = 1;
      }
      
      percent = Math.max(0, Math.min(percent, 1));
      setScrollPercent(percent);
      targetPercentRef.current = percent;
      lastScrollTimeRef.current = Date.now();
      
      // Cancela o timeout anterior
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Inicia um novo timeout de 1 segundo
      scrollTimeoutRef.current = setTimeout(() => {
        // Não faz nada, apenas deixa o loop de animação continuar
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Loop de animação suave
  useEffect(() => {
    const animationLoop = () => {
      if (videoRef.current && videoDuration > 0) {
        const now = Date.now();
        const timeSinceLastScroll = now - lastScrollTimeRef.current;
        
        // Se passou 1 segundo desde o último scroll, para de atualizar
        if (timeSinceLastScroll > 1000) {
          // Continua no último valor, deixa congelar suavemente
          animationFrameRef.current = requestAnimationFrame(animationLoop);
          return;
        }
        
        const targetTime = targetPercentRef.current * videoDuration;
        const currentTime = videoRef.current.currentTime;
        const diff = targetTime - currentTime;
        
        // Interpola suavemente
        if (Math.abs(diff) > 0.01) {
          const smoothFactor = 0.08; // Mais suave
          const newTime = currentTime + diff * smoothFactor;
          videoRef.current.currentTime = newTime;
        } else {
          videoRef.current.currentTime = targetTime;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    };
    
    // Inicia com o primeiro scroll em 0
    lastScrollTimeRef.current = Date.now();
    animationFrameRef.current = requestAnimationFrame(animationLoop);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [videoDuration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        opacity: 0.5 + scrollPercent * 0.5,
        transition: 'opacity 0.1s ease'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          overflow: 'hidden',
          borderRadius: '12px',
          background: '#000'
        }}
      >
        {videoUrl ? (
          <video
            ref={videoRef}
            onLoadedMetadata={handleLoadedMetadata}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            muted
          >
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5
          </video>
        ) : (
          <img
            src={gifUrl}
            alt={alt}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: scrollPercent,
              animation: 'none'
            }}
          />
        )}
      </div>
      <div style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#a0a0a0',
        textAlign: 'center'
      }}>
        Progresso: {Math.round(scrollPercent * 100)}%
      </div>
    </div>
  );
};

export default ScrollGifPlayer;
