// src/types/game.ts

// Defines all possible "pages" or game states
export type GameStatus =
  | 'loading'
  | 'menu'
  | 'about'
  | 'tutorial'
  | 'delay'
  | 'playing'
  | 'paused'
  | 'level_passed'
  | 'lost'
  | 'new_high_score'; // We might add this later

// Defines the structure for a single level
export interface Level {
  levelNum: number;
  time: number;
  tapValue: number;
  tapsGoal: number;
  goodCirclesCount: number;
  evilCirclesCount: number;
}

// Defines the main game state structure
export interface GameState {
  status: GameStatus;
  score: number;
  levelNum: number; // Current level number
  tapNum: number; // Taps so far in this level
  timeLeft: number; // Time left in seconds
  bonusScore: number;
  
  // Current level's settings
  currentLevel: Level;
  
  // All generated levels
  levels: Level[];
}

// Defines all possible actions to change the state
export type GameAction =
  | { type: 'SHOW_MENU' }
  | { type: 'SHOW_ABOUT' }
  | { type: 'SHOW_TUTORIAL' }
  | { type: 'START_NEW_GAME' }
  | { type: 'START_LEVEL_DELAY' } // Triggers the '3, 2, 1' countdown
  | { type: 'START_LEVEL' } // Actually starts the timer and circles
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' }
  | { type: 'TAP_GOOD_CIRCLE' }
  | { type: 'TAP_EVIL_CIRCLE' }
  | { type: 'TIMER_TICK' }
  | { type: 'TIMES_UP' }
  | { type: 'RESTART_GAME' }; // From pause or lost screen