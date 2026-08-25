'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  cursorText?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  cursorText = 'EXPLORE',
  onClick,
  strength = 30,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorVariant, resetCursor } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = left + width / 2;
    const middleY = top + height / 2;
    const x = (e.clientX - middleX) / (width / 2);
    const y = (e.clientY - middleY) / (height / 2);
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseEnter = () => {
    setCursorVariant('button', cursorText);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    resetCursor();
  };

  return (
    <motion.button
      ref={ref}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
      onClick={onClick}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
