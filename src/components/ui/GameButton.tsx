// src/components/ui/GameButton.tsx
import React from 'react';

interface GameButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'blue' | 'white'; // Replicates .btn-blue
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  onClick,
  variant = 'white',
}) => {
  // Base styles from .gm-btn
  const baseClasses =
    'block w-full bg-none text-base py-3 rounded-full mb-3.5 uppercase cursor-pointer transition-all duration-200 ease-in-out active:scale-110';

  // Variant styles for .btn-blue
  const variantClasses =
    variant === 'blue'
      ? 'border-2 border-brand-blue text-white font-semibold active:bg-brand-blue active:text-brand-dark'
      : 'border-2 border-white text-white font-light active:bg-white active:text-brand-dark';

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default GameButton;