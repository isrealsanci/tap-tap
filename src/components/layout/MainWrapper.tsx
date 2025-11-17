// src/components/layout/MainWrapper.tsx
import React from 'react';

interface MainWrapperProps {
  children: React.ReactNode;
}

// Replicates the .main-wrapper styles from style.css
const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <div
      className="
        w-full max-w-[640px] h-[640px] 
        shadow-[0_0_250px_0_rgba(0,0,0,0.4)]
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        max-h-screen max-w-full md:max-w-[640px] md:max-h-[640px]
      "
    >
      {children}
    </div>
  );
};

export default MainWrapper;