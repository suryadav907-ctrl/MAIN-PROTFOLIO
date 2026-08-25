'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;
  const { setCursorVariant, resetCursor } = useCursor();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 text-white/50 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-white font-sans font-bold text-lg tracking-wider">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>SURYASH YADAV</span>
            </div>
            <p className="text-white/60 font-sans text-sm max-w-md font-light leading-relaxed">
              B.Tech CSE student at GLA University, Mathura. Building, learning, and experimenting with computer science systems and software engineering.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-white/70">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleScrollTop(); }}
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={resetCursor}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Bottom Technical Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} SURYASH YADAV. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4 text-white/60">
            <span>GLA UNIVERSITY, MATHURA</span>
            <span>•</span>
            <span className="text-cyan-400">LEARN. BUILD. EVOLVE.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
