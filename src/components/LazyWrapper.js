import React from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

const LazyWrapper = ({ 
  children, 
  threshold = 0.1, 
  className = '', 
  placeholder = null,
  rootMargin = '50px'
}) => {
  const [ref, isVisible] = useLazyLoad(threshold);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (placeholder || <div style={{ minHeight: '200px' }} />)}
    </div>
  );
};

export default LazyWrapper;
