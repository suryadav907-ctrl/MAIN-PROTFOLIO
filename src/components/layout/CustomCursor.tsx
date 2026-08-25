'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorVariant, cursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch/mobile device
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const springTransition = { type: 'spring' as const, damping: 25, stiffness: 400, mass: 0.2 };

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference' as const,
      transition: springTransition
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(56, 189, 248, 0.15)',
      border: '1.5px solid rgba(56, 189, 248, 0.8)',
      mixBlendMode: 'normal' as const,
      transition: springTransition
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference' as const,
      transition: springTransition
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(56, 189, 248, 0.95)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'normal' as const,
      transition: springTransition
    },
    copied: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: 'rgba(34, 197, 94, 0.95)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'normal' as const,
      transition: springTransition
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      mixBlendMode: 'difference' as const,
      transition: springTransition
    }
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center text-center font-mono text-[11px] font-bold uppercase tracking-wider text-black shadow-lg"
      variants={variants}
      animate={cursorVariant}
      initial="default"
    >
      {cursorText && (
        <span className="animate-fade-in tracking-widest text-[10px] font-bold leading-none select-none px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
