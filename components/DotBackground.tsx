'use client';

import React, { useEffect, useRef } from 'react';

interface DotBackgroundProps {
  children: React.ReactNode;
}

const DotBackground: React.FC<DotBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawDots();
    };

    const drawDots = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotSize = 1;
      const spacing = 15;
      const rows = Math.floor(canvas.height / spacing);
      const cols = Math.floor(canvas.width / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing;
          const y = i * spacing;
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
          ctx.fillRect(x, y, dotSize, dotSize);
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(circle, #ffffff, #ffffff)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DotBackground;