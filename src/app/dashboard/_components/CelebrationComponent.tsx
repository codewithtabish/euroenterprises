/** @format */
'use client';
import confetti from 'canvas-confetti';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function CelebrationComponent({
  showCelebration,
}: {
  showCelebration: true;
}) {
  useEffect(() => {
    showCelebration && handleClick();
  });

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className='relative'>
      {/* <Button onClick={handleClick}>Trigger Side Cannons</Button> */}
    </div>
  );
}
