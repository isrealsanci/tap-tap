// src/pages/PlayAreaPage/TimeProgress.tsx
import React from 'react';
import { useGame } from '../../contexts/GameContext';

const TimeProgress: React.FC = () => {
  const { state } = useGame();
  const { timeLeft, currentLevel } = state;

  // Calculate percentage left (0-100)
  const progressValue = (timeLeft / currentLevel.time) * 100;

  // Add .switchColors-animation if time is low (replicates timeEngine.checkTime)
  const isTimeLow = timeLeft < 4 && timeLeft > 0;
  const barClasses = `
    h-full bg-brand-blue transition-all duration-100 ease-linear
    ${isTimeLow ? 'animate-switchColors' : ''}
  `;

  return (
    // .gm-stats-time-progress
    <div className="w-full h-[4%]">
      <div
        className={barClasses}
        style={{ width: `${Math.max(0, progressValue)}%` }} // Ensure width never goes below 0
      />
    </div>
  );
};

export default TimeProgress;