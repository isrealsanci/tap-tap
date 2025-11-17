// src/contexts/GameContext.tsx
import { createContext, type Dispatch, useContext } from 'react';
import type { GameState, GameAction } from '../types/game';

// Define the shape of the context data
export interface GameContextProps {
  state: GameState;
  dispatch: Dispatch<GameAction>;
}

// Create the context with a default (empty) value
export const GameContext = createContext<GameContextProps | undefined>(
  undefined
);

// Custom hook to easily use the context
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};