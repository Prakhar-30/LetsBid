'use client';

import { useEffect, useState } from 'react';

export function SpotlightEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        id="custom-cursor"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      />

      {/* Spotlight effect - radial gradient that follows mouse */}
      <div className="spotlight-container">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `radial-gradient(
              circle 350px at ${position.x}px ${position.y}px,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.08) 30%,
              rgba(255, 255, 255, 0.03) 50%,
              transparent 70%
            )`,
            transition: 'background 0.1s ease',
          }}
        />

        {/* Additional spotlight glow effect */}
        <div
          style={{
            position: 'absolute',
            left: `${position.x - 200}px`,
            top: `${position.y - 200}px`,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
            transition: 'left 0.15s ease, top 0.15s ease',
          }}
        />
      </div>
    </>
  );
}
