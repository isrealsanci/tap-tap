// src/components/layout/PageWrapper.tsx
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  variant?: '75w' | '100w'; // To replace .fixed-75w-wrapper or .fixed-100w-wrapper
  className?: string; // Allow extra classes
}

// Replicates .fixed-75w-wrapper and .fixed-100w-wrapper
const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  variant = '75w',
  className = '',
}) => {
  const baseStyle = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const variantStyle =
    variant === '75w' ? 'w-3/4 text-center' : 'w-full text-center';

  return (
    <div className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;