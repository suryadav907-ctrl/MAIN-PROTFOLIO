'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { Zap, Radio, Orbit, Atom, ArrowDownRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % personalInfo.animatedStatements.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personalInfo.animatedStatements.length]);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent"
    >
      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white/80">EVENT HORIZON ENGINE // CSE 2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-cyan-400/80">
          <span className="flex items-center gap-1.5">
            <Orbit className="w-3.5 h-3.5 text-purple-400 animate-spin" />
            {personalInfo.institution}
          </span>
          <span className="text-white/20">•</span>
          <span>{personalInfo.locationDetails}</span>
        </div>
      </div>

      {/* Core Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-start justify-center">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 backdrop-blur-md mb-6 font-mono text-xs text-cyan-300 tracking-wider uppercase animate-gamma-pulse"
        >
          <Zap className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span>GAMMA-RAY BURST ENGINE // {personalInfo.role}</span>
        </motion.div>

        {/* Main Massive Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] font-sans">
            HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-rose-400">SURYASH.</span>
          </h1>
        </motion.div>

        {/* Animated Dynamic Cycle Statement */}
        <div className="h-16 sm:h-20 md:h-24 my-6 flex items-center overflow-hidden">
          <motion.div
            key={statementIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cyan-400 flex items-center gap-4"
          >
            <span className="text-rose-400/50 text-xl sm:text-3xl font-light">//</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-rose-400">
              {personalInfo.animatedStatements[statementIndex]}
            </span>
          </motion.div>
        </div>

        {/* Concise Statement Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-white/75 text-base sm:text-lg font-light leading-relaxed font-sans mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Floating Mini Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-10 font-mono text-xs text-white/70"
        >
          <span className="px-3.5 py-1.5 rounded-md bg-white/5 border border-cyan-400/20 flex items-center gap-2 hover:border-cyan-400 transition-colors">
            <Atom className="w-3.5 h-3.5 text-cyan-400" /> C++ / Python / Java
          </span>
          <span className="px-3.5 py-1.5 rounded-md bg-white/5 border border-purple-400/20 flex items-center gap-2 hover:border-purple-400 transition-colors">
            <Orbit className="w-3.5 h-3.5 text-purple-400" /> Data Structures & Algo
          </span>
          <span className="px-3.5 py-1.5 rounded-md bg-white/5 border border-rose-400/20 flex items-center gap-2 hover:border-rose-400 transition-colors">
            <Radio className="w-3.5 h-3.5 text-rose-400" /> DBMS & Web Tech
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <MagneticButton
            onClick={() => handleScrollTo('projects')}
            cursorText="PROJECTS"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:from-cyan-300 hover:to-indigo-400 transition-all shadow-[0_0_35px_rgba(56,189,248,0.5)]"
          >
            EXPLORE MY WORK ↓
          </MagneticButton>

          <MagneticButton
            onClick={() => handleScrollTo('contact')}
            cursorText="LET'S TALK"
            className="px-8 py-4 rounded-full bg-transparent border border-white/30 text-white hover:border-rose-400 hover:text-rose-400 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all"
          >
            CONTACT ME →
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom Editorial Status Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-xs text-white/40">
        <div className="flex items-center gap-2">
          <ArrowDownRight className="w-4 h-4 text-cyan-400" />
          <span>MOVE CURSOR TO DISTORT GRAVITATIONAL SINGULARITY</span>
        </div>
        <div className="flex items-center gap-6">
          <span>GLA UNIVERSITY MATHURA</span>
          <span className="text-rose-400">B.TECH CSE</span>
        </div>
      </div>
    </section>
  );
};
