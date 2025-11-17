// src/components/ui/GameLogo.tsx
import React from 'react';

// Replicates .tpbl-circle .c-blue .gm-menu-logo-bg
const GameLogo: React.FC = () => {
  // Base styles from .tpbl-circle
  const baseClasses =
    'relative rounded-full cursor-default w-[3.5em] h-[3.5em] mx-auto mb-6 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:animate-beating before:opacity-0 before:-z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:animate-beating after:opacity-0 after:-z-10 after:[animation-delay:0.4s]';

  // .c-blue + .gm-menu-logo-bg (which uses a thicker 1.4em shadow)
  const colorClasses =
    'shadow-[inset_0_0_0_1.4em_#58D1FF] z-30 before:shadow-circle-blue-pulse after:shadow-circle-blue-pulse';

  return <div className={`${baseClasses} ${colorClasses}`} />;
};

export default GameLogo;