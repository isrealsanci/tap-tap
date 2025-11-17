// src/hooks/useGameLogic.ts
import { useReducer, useEffect, useRef } from 'react';
import type { GameState, GameAction, Level } from '../types/game';

// --- Re-implementation of levelsEngine ---
const initialLevels: Level[] = [
  {
    levelNum: 1,
    time: 7,
    tapValue: 3,
    tapsGoal: 5,
    goodCirclesCount: 1,
    evilCirclesCount: 4,
  },
];

const generateNextLevel = (prevLevel: Level): Level => {
  return {
    levelNum: prevLevel.levelNum + 1,
    time: prevLevel.time + 1,
    tapValue: prevLevel.tapValue + 2,
    tapsGoal: prevLevel.tapsGoal + 1,
    goodCirclesCount: 1, // Always 1 good circle
    evilCirclesCount: prevLevel.evilCirclesCount + 1,
  };
};

// --- Initial State ---
const initialState: GameState = {
  status: 'loading',
  score: 0,
  levelNum: 1,
  tapNum: 0,
  timeLeft: initialLevels[0].time,
  bonusScore: 0,
  currentLevel: initialLevels[0],
  levels: initialLevels,
};

// --- The Game Reducer (The "Brain") ---
// Manages all state transitions
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SHOW_MENU':
      return { ...initialState, status: 'menu' }; // Reset game

    case 'SHOW_ABOUT':
      return { ...state, status: 'about' };

    case 'SHOW_TUTORIAL':
      return { ...state, status: 'tutorial' };

    case 'START_NEW_GAME': // From menu
      return {
        ...initialState, // Fully reset game state
        status: 'tutorial',
      };

    case 'RESTART_GAME': // From pause/lost screen
      return {
        ...initialState,
        status: 'menu',
      };

    case 'START_LEVEL_DELAY': // From tutorial or level_passed page
      return {
        ...state,
        status: 'delay',
        tapNum: 0,
        bonusScore: 0,
        timeLeft: state.currentLevel.time,
      };

    case 'START_LEVEL': // After 'delay' countdown
      return {
        ...state,
        status: 'playing',
      };

    case 'PAUSE_GAME':
      if (state.status !== 'playing') return state;
      return { ...state, status: 'paused' };

    case 'RESUME_GAME':
      if (state.status !== 'paused') return state;
      return { ...state, status: 'playing' };

    case 'TIMER_TICK':
      if (state.status !== 'playing' || state.timeLeft <= 0) {
        return state;
      }
      const newTimeLeft = state.timeLeft - 0.1; // 100ms tick
      if (newTimeLeft <= 0) {
        return { ...state, status: 'lost', timeLeft: 0 };
      }
      return { ...state, timeLeft: newTimeLeft };

    case 'TIMES_UP': // Failsafe, though TIMER_TICK handles it
      return { ...state, status: 'lost', timeLeft: 0 };

    case 'TAP_GOOD_CIRCLE':
      if (state.status !== 'playing') return state;
      
      const newTapNum = state.tapNum + 1;
      const newScore = state.score + state.currentLevel.tapValue;

      // Check for level pass
      if (newTapNum >= state.currentLevel.tapsGoal) {
        const bonus = Math.round(state.timeLeft) * 10;
        const nextLevel = generateNextLevel(state.currentLevel);
        
        return {
          ...state,
          status: 'level_passed',
          tapNum: newTapNum,
          score: newScore + bonus,
          bonusScore: bonus,
          levelNum: nextLevel.levelNum, // Prepare for next level
          currentLevel: nextLevel,
          levels: [...state.levels, nextLevel],
        };
      }

      // Just a normal tap
      return {
        ...state,
        tapNum: newTapNum,
        score: newScore,
      };

    case 'TAP_EVIL_CIRCLE':
      if (state.status !== 'playing') return state;
      return { ...state, status: 'lost' };

    default:
      return state;
  }
}

// --- The Main Hook ---
// This hook combines the reducer (state) with the timer (side effect)
export const useGameLogic = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  // FIX 1: Changed 'NodeJS.Timeout' to 'number'
  const timerRef = useRef<number | null>(null);

  // The Timer Engine
  useEffect(() => {
    // Start timer
    if (state.status === 'playing') {
      timerRef.current = setInterval(() => {
        dispatch({ type: 'TIMER_TICK' });
      }, 100); // 100ms interval for smooth bar
    } else {
      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [state.status]); // Re-run effect only when status changes

  // Simulate loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      dispatch({ type: 'SHOW_MENU' });
    }, 1500); // 1.5s load time, just like old game
    return () => clearTimeout(loadingTimer);
  }, []);

  return { state, dispatch };
};