// src/pages/PlayAreaPage/GameSpace.tsx
import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import TappableCircle from '../../components/ui/TappableCircle';
import { useAudio, GameSound } from '../../hooks/useAudio';

// Function to generate random number in range (replicates toolsBox.gnrtRndmNum)
const gnrtRndmNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Circle component with position and logic
interface PlayableCircleProps {
  type: 'good' | 'evil';
  onClick: () => void;
  gameSpace: HTMLDivElement;
}

const PlayableCircle: React.FC<PlayableCircleProps> = ({ type, onClick, gameSpace }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { play: playCircleAppear } = useAudio(GameSound.CircleAppear);

  useEffect(() => {
    // Replicates circlesEngine.randomPosition
    const circleSize = 44; // w-11 h-11
    const gameSpcWidth = gameSpace.offsetWidth;
    const gmSpcHeight = gameSpace.offsetHeight;

    setPosition({
      left: gnrtRndmNum(circleSize, gameSpcWidth - circleSize),
      top: gnrtRndmNum(circleSize, gmSpcHeight - circleSize),
    });

    // Play sound on appear
    playCircleAppear();
  }, [gameSpace, playCircleAppear]); // Re-calculate on boundaries change

  return (
    <TappableCircle
      color={type === 'good' ? 'blue' : 'red'}
      onClick={onClick}
      className="absolute animate-grow" // .grow-animation
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        // Start invisible, animation makes it visible
        transform: 'scale(0)', 
      }}
    />
  );
};

// The main GameSpace component
const GameSpace: React.FC = () => {
  const { state, dispatch } = useGame();
  const { goodCirclesCount, evilCirclesCount } = state.currentLevel;
  const { play: playGoodTap } = useAudio(GameSound.TouchBlue);
  const { play: playEvilTap } = useAudio(GameSound.TouchRed);

  // Ref to the game space div to get its dimensions
  const gameSpaceRef = React.useRef<HTMLDivElement>(null);

  const handleGoodTap = () => {
    playGoodTap();
    dispatch({ type: 'TAP_GOOD_CIRCLE' });
  };

  const handleEvilTap = () => {
    playEvilTap();
    dispatch({ type: 'TAP_EVIL_CIRCLE' });
  };

  // We need to ensure the ref is set before rendering circles
  if (!gameSpaceRef.current) {
    return (
      <div id="gameSpace" ref={gameSpaceRef} className="w-full h-full relative" />
    );
  }

  return (
    // .game-space
    <div id="gameSpace" ref={gameSpaceRef} className="w-full h-full relative">
      {/* Render Good Circles */}
      {/* We use a key to force re-render/re-position on good tap */}
      {Array.from({ length: goodCirclesCount }, (_, i) => (
        <PlayableCircle
          key={`good-${state.tapNum}-${i}`} // This forces remount on tap
          type="good"
          onClick={handleGoodTap}
          gameSpace={gameSpaceRef.current!}
        />
      ))}

      {/* Render Evil Circles */}
      {Array.from({ length: evilCirclesCount }, (_, i) => (
        <PlayableCircle
          key={`evil-${state.tapNum}-${i}`} // This forces remount on tap
          type="evil"
          onClick={handleEvilTap}
          gameSpace={gameSpaceRef.current!}
        />
      ))}
    </div>
  );
};

export default GameSpace;