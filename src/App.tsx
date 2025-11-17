// src/App.tsx
import { useGame } from './contexts/GameContext';
import MainWrapper from './components/layout/MainWrapper';

const SplashPage = () => <div>Loading...</div>;
const GameMenuPage = () => <div>Game Menu</div>;
const AboutPage = () => <div>About</div>;
const TutorialPage = () => <div>Tutorial</div>;
const PlayDelayPage = () => <div>3... 2... 1...</div>;
const PlayAreaPage = () => <div>Playing Game...</div>;
const PauseMenuPage = () => <div>Paused</div>;
const YouLostPage = () => <div>You Lost</div>;
const LevelPassedPage = () => <div>Level Passed!</div>;
// --- End of Placeholders ---

// This component acts as the "Page Manager"
function App() {
  const { state } = useGame();

  // This function decides which page component to render
  const renderView = () => {
    switch (state.status) {
      case 'loading':
        return <SplashPage />;
      case 'menu':
        return <GameMenuPage />;
      case 'about':
        return <AboutPage />;
      case 'tutorial':
        return <TutorialPage />;
      case 'delay':
        return <PlayDelayPage />;
      case 'playing':
        return <PlayAreaPage />;
      case 'paused':
        return <PauseMenuPage />;
      case 'lost':
        return <YouLostPage />;
      case 'level_passed':
        return <LevelPassedPage />;
      default:
        return <SplashPage />; // Fallback
    }
  };

  return (
    <MainWrapper>
      {/* This is where the magic happens. 
        React swaps the entire page component based on the game state.
      */}
      {renderView()}
    </MainWrapper>
  );
}

export default App;