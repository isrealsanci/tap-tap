// src/pages/SplashPage.tsx
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';

// This is the logo from the splash screen
// .tpbl-circle.c-white.splash-screen-logo
const SplashLogo: React.FC = () => {
  const baseClasses =
    'relative rounded-full cursor-default w-[3.5em] h-[3.5em] mx-auto mb-6 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:animate-beating before:opacity-0 before:-z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:animate-beating after:opacity-0 after:-z-10 after:[animation-delay:0.4s]';
  
  // .c-white + .splash-screen-logo (1.4em shadow)
  const colorClasses =
    'shadow-[inset_0_0_0_1.4em_#FFFFFF] z-10 before:shadow-circle-white-pulse after:shadow-circle-white-pulse';
  
  return <div className={`${baseClasses} ${colorClasses}`} />;
};


const SplashPage: React.FC = () => {
  return (
    // .page-cont .page-splash .page-faded-bg
    <div className="page-faded-bg w-full h-full absolute">
      <PageWrapper variant="75w">
        <SplashLogo />
        <div>Loading AWESOME STUFF</div>
      </PageWrapper>
    </div>
  );
};

export default SplashPage;