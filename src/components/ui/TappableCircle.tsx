// src/components/ui/TappableCircle.tsx
import React from 'react'; // Needed for React.CSSProperties

interface TappableCircleProps {
  color: 'blue' | 'red' | 'white';
  onClick?: () => void;
  className?: string; // For additional styling like size, animation, etc.
  style?: React.CSSProperties; // <-- THE FIX: Allow 'style' prop
}

// Replicates .tpbl-circle and its color variants (.c-blue, .c-red, .c-white)
const TappableCircle: React.FC<TappableCircleProps> = ({
  color,
  onClick,
  className = '',
  style, // <-- THE FIX: Destructure the 'style' prop
}) => {
  // Base styles from .tpbl-circle
  const baseClasses =
    'relative rounded-full cursor-pointer w-11 h-11 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:animate-beating before:opacity-0 before:-z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:animate-beating after:opacity-0 after:-z-10 after:[animation-delay:0.4s] active:scale-[2]';

  // Determine color shadow class
  let colorClasses = '';
  switch (color) {
    case 'blue':
      colorClasses = 'shadow-circle-blue z-30 before:shadow-circle-blue-pulse after:shadow-circle-blue-pulse';
      break;
    case 'red':
      colorClasses = 'shadow-circle-red z-20 before:shadow-circle-red-pulse after:shadow-circle-red-pulse';
      break;
    case 'white':
      colorClasses = 'shadow-circle-white z-10 before:shadow-circle-white-pulse after:shadow-circle-white-pulse';
      break;
  }

  return (
    <div
      className={`${baseClasses} ${colorClasses} ${className}`}
      onClick={onClick}
      style={style} // <-- THE FIX: Apply the 'style' prop here
    />
  );
};

export default TappableCircle;