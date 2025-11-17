// src/pages/PlayAreaPage/GameStats.tsx
import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { useAudio, GameSound } from '../../hooks/useAudio';

const GameStats: React.FC = () => {
  const { state, dispatch } = useGame();
  const { score, currentLevel, tapNum } = state;
  const { play: playButtonTap } = useAudio(GameSound.ButtonTap);

  const handlePause = () => {
    playButtonTap();
    dispatch({ type: 'PAUSE_GAME' });
  };

  return (
    // .gm-stats-wrapper
    <div className="w-[94%] h-[96%] mx-auto relative flex justify-between items-center">
      {/* Left side: Pause Button */}
      <div className="w-1/3 text-left">
        <button
          id="gmStatsPauseBtn"
          onClick={handlePause}
          className="w-11 h-full border-none bg-no-repeat bg-center active:scale-[2] transition-transform"
          style={{ backgroundImage: "url('/images/pauseIconSmall.svg')" }}
        />
      </div>

      {/* Middle: Score */}
      <div className="w-1/3 text-center">
        {/* .stat-wrapper */}
        <div>
          <div className="text-xs">Score</div>
          <div id="gmStatsScore" className="text-xl font-semibold">
            {score}
          </div>
        </div>
      </div>

      {/* Right side: Level & Taps */}
      <div className="w-1/3 text-right">
        {/* .stat-wrapper */}
        <div>
          <div id="gmStatsLvlNumb" className="text-xs">
            Level {currentLevel.levelNum}
          </div>
          <div className="text-xl font-semibold">
            <span id="gmStatsCurrentTapCount" className="text-brand-blue">
              {tapNum}
            </span>
            <span id="gmStatsTotalTapCount">/{currentLevel.tapsGoal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;