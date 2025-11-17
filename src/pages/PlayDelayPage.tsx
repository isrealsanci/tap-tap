// src/pages/PlayDelayPage.tsx
import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import PageWrapper from '../components/layout/PageWrapper';
import { useAudio, GameSound } from '../hooks/useAudio';

const PlayDelayPage: React.FC = () => {
  const { dispatch } = useGame();
  const [count, setCount] = useState(3);
  
  // Note: We import the path relative to *this* file
  // ../hooks/useAudio
  const { play: playDelaySound } = useAudio(GameSound.DelayCount);

  useEffect(() => {
    // Play sound for "3" on component mount
    playDelaySound();

    // Re-implementation of toolsBox.pagePlayDelay.start
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          // Will show '2' or '1'
          playDelaySound(); // Play sound for '2' and '1'
          return prevCount - 1;
        } else {
          // Count finished
          clearInterval(timer);
          dispatch({ type: 'START_LEVEL' }); // Start the level
          return 0; // This count number won't be shown
        }
      });
    }, 500); // 500ms interval from original code

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, [dispatch, playDelaySound]);

  return (
    // .page-cont .page-play-delay .page-faded-bg
    <div className="page-faded-bg w-full h-full absolute">
      <PageWrapper variant="75w">
        {/* #playDelayNum with .grow-animation */}
        <div className="text-[10rem] animate-grow">{count}</div>
      </PageWrapper>
    </div>
  );
};

export default PlayDelayPage;