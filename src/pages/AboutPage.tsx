// src/pages/AboutPage.tsx
import React from 'react';
import { useGame } from '../contexts/GameContext';
import PageWrapper from '../components/layout/PageWrapper';
import TappableCircle from '../components/ui/TappableCircle';

const AboutPage: React.FC = () => {
  const { dispatch } = useGame();

  
  const handleBack = () => dispatch({ type: 'SHOW_MENU' });

  return (
    // .page-cont .page-about .page-faded-bg .anmtd-grdnt-bg .blu-grdnt-bg
    <div className="page-faded-bg anmtd-grdnt-bg blu-grdnt-bg w-full h-full absolute">
      <PageWrapper variant="75w">
        {/* .info-screen-title-cont */}
        <div className="mb-3">
          <div className="text-[1.4545em] font-semibold">About</div>
        </div>

       
        <div className="border-t border-b border-white/30 py-3 mb-4">
          <div>Created by</div>
          <div className="text-brand-blue font-semibold inline-block py-2.5">
            Sanci
          </div>
          <hr className="border-none border-b border-white/30 mb-4" />
          <div>Source Code</div>
          <a
            href="https://github.com/isrealsanci/tap-tap"
            className="text-brand-blue font-semibold inline-block py-2.5 normal-case"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/isrealsanci/tap-tap
          </a>
        </div>

        
        <TappableCircle
          color="white"
          onClick={handleBack}
          className="mx-auto"
        />
      </PageWrapper>
    </div>
  );
};

export default AboutPage;