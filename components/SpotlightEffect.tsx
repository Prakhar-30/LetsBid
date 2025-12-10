'use client';

import { useEffect, useState } from 'react';

export function SpotlightEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
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

      {/* Spotlight effect - yellowish radial gradient that follows mouse */}
      <div className="spotlight-container">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `radial-gradient(
              circle 350px at ${position.x}px ${position.y}px,
              rgba(255, 220, 100, 0.25) 0%,
              rgba(255, 200, 80, 0.15) 20%,
              rgba(255, 180, 60, 0.08) 40%,
              rgba(255, 160, 40, 0.03) 60%,
              transparent 80%
            )`,
            transition: 'background 0.1s ease',
          }}
        />

        {/* Additional yellowish spotlight glow effect */}
        <div
          style={{
            position: 'absolute',
            left: `${position.x - 200}px`,
            top: `${position.y - 200}px`,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 200, 80, 0.2) 0%, rgba(255, 180, 60, 0.1) 40%, transparent 70%)',
            filter: 'blur(50px)',
            transition: 'left 0.15s ease, top 0.15s ease',
          }}
        />
      </div>
    </>
  );
}
