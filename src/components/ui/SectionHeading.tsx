'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  badge = "ENGINEERING PORTFOLIO"
}) => {
  return (
    <div className="mb-16 md:mb-24 relative">
      {/* Top technical badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-400/80"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>SECTION {number}</span>
        <span className="text-white/20">|</span>
        <span className="text-white/50">{badge}</span>
      </motion.div>

      {/* Main Editorial Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-sans"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 font-mono text-xs sm:text-sm max-w-xs tracking-wide leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
