import React from 'react';
import LazyWrapper from '../components/LazyWrapper';

const LazyServicePage = ({ children, ...props }) => {
  return (
    <LazyWrapper threshold={0.1}>
      {children}
    </LazyWrapper>
  );
};

export default LazyServicePage;
