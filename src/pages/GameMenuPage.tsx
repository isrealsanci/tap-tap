// src/pages/GameMenuPage.tsx
import React from 'react';
import { useGame } from '../contexts/GameContext';
import PageWrapper from '../components/layout/PageWrapper';
import GameButton from '../components/ui/GameButton';
import GameLogo from '../components/ui/GameLogo';

const GameMenuPage: React.FC = () => {
  const { dispatch } = useGame();

  // Connect buttons to the game logic
  const handleNewGame = () => dispatch({ type: 'START_NEW_GAME' });
  const handleAbout = () => dispatch({ type: 'SHOW_ABOUT' });

  return (
    // .page-cont .page-game-menu .page-faded-bg
    <div className="page-faded-bg w-full h-full absolute">
      <PageWrapper variant="75w">
        {/* .gm-menu-header-cont */}
        <div className="mb-6">
          <GameLogo />
          {/* .gm-menu-title */}
          <h1 className="text-[1.4545em] font-semibold">Tap Tap Tap</h1>
          {/* .gm-menu-subtitle */}
          <h2 className="text-base font-normal text-brand-blue">
            Every Tap Matters
          </h2>
        </div>
        
        {/* Buttons */}
        <GameButton variant="blue" onClick={handleNewGame}>
          New Game
        </GameButton>
        <GameButton variant="white" onClick={handleAbout}>
          About
        </GameButton>
      </PageWrapper>
    </div>
  );
};

export default GameMenuPage;