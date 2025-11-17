// src/pages/PlayAreaPage/index.tsx
import React from 'react';
import TimeProgress from './TimeProgress';
import GameStats from './GameStats';
import GameSpace from './GameSpace';

const PlayAreaPage: React.FC = () => {
  return (
    // .page-cont .page-play-area
    // We add the gradient overlay via ::after
    <div
      className="
        w-full h-full absolute
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10
        after:bg-gradient-to-b after:from-brand-dark after:to-[rgba(11,29,49,0.5)]
      "
    >
      {/* .game-stats-cont */}
      <div className="w-full h-[10%] mx-auto relative">
        <TimeProgress />
        <GameStats />
      </div>

      {/* .game-space (the component handles its own height) */}
      <GameSpace />
    </div>
  );
};

export default PlayAreaPage;