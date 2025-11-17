// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Your global styles
import { GameContext } from './contexts/GameContext.tsx';
import { useGameLogic } from './hooks/useGameLogic.ts';

// Create a wrapper component to provide the context
const AppWrapper = () => {
  // The 'brain' (useGameLogic hook) is now connected here
  const { state, dispatch } = useGameLogic();

  return (
    // Provide the state and dispatch to the entire App tree
    <GameContext.Provider value={{ state, dispatch }}>
      <App />
    </GameContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);