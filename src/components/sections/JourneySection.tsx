'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { GitCommit, Milestone, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

const ENGINEERING_MOTIF = ['LEARN', 'BUILD', 'FAIL', 'IMPROVE', 'REPEAT'];

export const JourneySection: React.FC = () => {
  const { journey } = portfolioData;
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          title="MY JOURNEY"
          subtitle="Academic evolution, technical progression, and continuous growth as a B.Tech CSE engineer."
        />

        {/* Visual Engineering Loop Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm text-cyan-400"
        >
          <div className="flex items-center gap-2 text-white/50">
            <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="uppercase tracking-widest text-[11px]">ENGINEERING CORE LOOP:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-bold tracking-wider">
            {ENGINEERING_MOTIF.map((step, idx) => (
              <React.Fragment key={step}>
                <span className={`px-3 py-1 rounded-md ${idx === 1 ? 'bg-cyan-400 text-black font-extrabold' : 'bg-white/5 border border-white/10 text-white'}`}>
                  {step}
                </span>
                {idx < ENGINEERING_MOTIF.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-6">
          {journey.map((item, index) => {
            const isCurrent = item.status === 'current';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={resetCursor}
                className="relative group"
              >
                {/* Node Dot on Timeline */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  isCurrent
                    ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]'
                    : 'bg-[#08080a] border-white/40 group-hover:border-cyan-400 group-hover:bg-cyan-400'
                }`} />

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 group-hover:border-cyan-400/40 group-hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono text-xs">
                    <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-white/40 uppercase tracking-widest">{item.period}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight font-sans">
                    {item.title}
                  </h3>

                  <p className="text-white/70 font-sans text-sm sm:text-base font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
