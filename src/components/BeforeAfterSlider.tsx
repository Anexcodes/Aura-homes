import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, History, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  projectTitle?: string;
  heightClass?: string;
  darkMode?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Original / Before Layout',
  afterLabel = 'AURA Architectural Transformation',
  projectTitle,
  heightClass = 'h-[360px] sm:h-[460px]',
  darkMode = true
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="flex flex-col space-y-2 select-none">
      {projectTitle && (
        <div className="flex items-center justify-between px-1">
          <span className={`text-xs font-mono uppercase tracking-wider ${
            darkMode ? 'text-stone-300' : 'text-stone-700'
          }`}>
            Transformation Analysis: {projectTitle}
          </span>
          <span className="text-[11px] font-mono text-amber-500 flex items-center gap-1">
            <MoveHorizontal className="w-3.5 h-3.5" />
            Drag handle to compare
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        id="before-after-container"
        className={`relative w-full ${heightClass} rounded-lg overflow-hidden cursor-ew-resize border shadow-lg ${
          darkMode ? 'border-neutral-800' : 'border-stone-200'
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background full width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm filter on before image to differentiate */}
          <div className="absolute inset-0 bg-stone-900/15 mix-blend-multiply" />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-neutral-900/90 text-amber-400 border border-amber-500/50 backdrop-blur-md flex items-center justify-center shadow-xl transform -translate-x-1/2">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Labels Floating in Corners */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-neutral-950/80 text-stone-200 backdrop-blur-sm border border-white/10">
            <History className="w-3 h-3 text-stone-400" />
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-500/90 text-neutral-950 backdrop-blur-sm shadow-md font-semibold">
            <Sparkles className="w-3 h-3" />
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
