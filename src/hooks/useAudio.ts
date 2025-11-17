// src/hooks/useAudio.ts
import { useMemo } from 'react';

// FIX:
// 1. Changed 'enum' to 'const ... as const'
// This creates a plain JavaScript object for runtime values.
export const GameSound = {
  CircleAppear: 'circleAppear',
  TouchBlue: 'touchBlue',
  TouchRed: 'touchRed',
  LevelPassed: 'levelPassed',
  LevelLost: 'levelLost',
  ButtonTap: 'buttonTap',
  DelayCount: 'delayCount',
  TimeAlmostUp: 'timeAlmostUp',
} as const;

// 2. We derive the 'type' from the object's values.
// This type IS erasable and satisfies TypeScript.
export type GameSound = typeof GameSound[keyof typeof GameSound];

// The rest of the hook works perfectly with this new type.
export const useAudio = (sound: GameSound, loop: boolean = false) => {
  // useMemo ensures the Audio object is not recreated on every render
  const audio = useMemo(() => {
    const el = new Audio();
    // We'll use .mp3 for simplicity in this React port
    el.src = `/sounds/mp3/${sound}.mp3`;
    el.preload = 'auto';
    el.loop = loop;
    return el;
  }, [sound, loop]);

  // Play function (with reset)
  const play = () => {
    audio.currentTime = 0;
    audio.play().catch(e => console.error("Audio play failed:", e));
  };

  // Stop function
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return { play, stop };
};