import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = window.scrollY / totalHeight;
        setProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00C2FF] via-[#38BDF8] to-blue-500 origin-left transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(0,194,255,0.7)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
