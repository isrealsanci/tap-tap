// src/App.tsx
import { useGame } from './contexts/GameContext';
import MainWrapper from './components/layout/MainWrapper';

// --- Page Components (Real ones this time) ---
import SplashPage from './pages/SplashPage';
import GameMenuPage from './pages/GameMenuPage';
// import AboutPage from './pages/AboutPage';
// import TutorialPage from './pages/TutorialPage';
// import PlayDelayPage from './pages/PlayDelayPage';
// import PlayAreaPage from './pages/PlayAreaPage';
// import PauseMenuPage from './pages/PauseMenuPage';
// import YouLostPage from './pages/YouLostPage';
// import LevelPassedPage from './pages/LevelPassedPage';

// --- Placeholder Components (for pages we haven't built yet) ---
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
        return <SplashPage />; // REAL
      case 'menu':
        return <GameMenuPage />; // REAL
      case 'about':
        return <AboutPage />; // Placeholder
      case 'tutorial':
        return <TutorialPage />; // Placeholder
      case 'delay':
        return <PlayDelayPage />; // Placeholder
      case 'playing':
        return <PlayAreaPage />; // Placeholder
      case 'paused':
        return <PauseMenuPage />; // Placeholder
      case 'lost':
        return <YouLostPage />; // Placeholder
      case 'level_passed':
        return <LevelPassedPage />; // Placeholder
      default:
        return <SplashPage />; // Fallback
    }
  };

  return <MainWrapper>{renderView()}</MainWrapper>;
}

export default App;