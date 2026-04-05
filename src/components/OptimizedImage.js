import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  effect = 'blur',
  threshold = 100,
  placeholderSrc = null,
  ...props 
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect={effect}
      width={width}
      height={height}
      threshold={threshold}
      placeholderSrc={placeholderSrc}
      {...props}
    />
  );
};

export default OptimizedImage;
