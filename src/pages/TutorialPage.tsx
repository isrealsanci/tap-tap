// src/pages/TutorialPage.tsx
import React from 'react';
import { useGame } from '../contexts/GameContext';
import PageWrapper from '../components/layout/PageWrapper';
import TappableCircle from '../components/ui/TappableCircle';
import { useAudio, GameSound } from '../hooks/useAudio'; 

const TutorialPage: React.FC = () => {
  const { dispatch } = useGame();
  const { play: playButtonTap } = useAudio(GameSound.ButtonTap); 

  // This tap will start the 3-2-1 countdown
  const handleStartGame = () => {
    playButtonTap();
    dispatch({ type: 'START_LEVEL_DELAY' });
  };

  return (
    // .page-cont .page-tutorial .page-faded-bg
    <div className="page-faded-bg w-full h-full absolute">
      <PageWrapper variant="100w">
        {/* .tut-circle */}
        <TappableCircle
          color="blue"
          onClick={handleStartGame}
          className="mx-auto"
        />
        {/* .tut-arrow */}
        <div
          className="h-16 w-full animate-anmtdBG"
          style={{
            backgroundImage: "url('/images/tapsIcon.svg')",
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* .tut-text */}
        <h2 className="text-base font-normal">
          TAP THE CIRCLE
          <br />
          TO START
        </h2>
      </PageWrapper>
    </div>
  );
};

export default TutorialPage;