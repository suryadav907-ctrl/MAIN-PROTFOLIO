'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { GraduationCap, Calendar, Building2, MapPin, Code2, Compass } from 'lucide-react';

const STAT_ICONS = [
  GraduationCap,
  Calendar,
  Building2,
  MapPin
];

export const AboutSection: React.FC = () => {
  const { aboutStats } = portfolioData;
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          title="ABOUT ME"
          subtitle="Engineering mindset, core computer science principles, and practical problem solving."
        />

        {/* Editorial Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>WHO I AM</span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug font-sans tracking-tight">
              I'm <span className="font-bold text-cyan-400">Suryash Yadav</span>, a 2nd-year B.Tech Computer Science Engineering student at <span className="underline decoration-cyan-400/50 underline-offset-4">GLA University, Mathura</span>.
            </p>

            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed font-sans">
              I'm focused on developing strong programming fundamentals, exploring modern technologies, and building practical projects that turn ideas into working solutions. Rather than focusing on superficial tools, I emphasize deep understanding of data structures, algorithm efficiency, database design, and software architecture.
            </p>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs text-white/60">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-bold">Focus</div>
                  <div>Problem Solving & DSA</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-white font-bold">Approach</div>
                  <div>Build & Experiment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Visual Card Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500" />
            <div className="font-mono text-xs text-cyan-400/80 uppercase tracking-widest mb-4">// CORE PHILOSOPHY</div>
            <blockquote className="text-xl sm:text-2xl font-sans font-medium text-white italic leading-relaxed mb-6">
              "Engineering is not just writing code; it is understanding how systems think, optimize, and scale under real-world constraints."
            </blockquote>
            <div className="flex items-center gap-3 border-t border-white/10 pt-4 font-mono text-xs text-white/50">
              <span>SURYASH YADAV</span>
              <span>•</span>
              <span className="text-cyan-400">CSE 2ND YEAR</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Interactive Hover Info Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutStats.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={resetCursor}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-24 h-24 bg-cyan-400/0 group-hover:bg-cyan-400/10 rounded-full blur-xl transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
                      {stat.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight font-sans group-hover:translate-x-1 transition-transform">
                    {stat.title}
                  </h3>
                  <div className="font-mono text-xs text-cyan-400/80 mb-4 tracking-wider uppercase">
                    {stat.subtitle}
                  </div>
                </div>

                <p className="text-white/60 font-sans text-xs leading-relaxed border-t border-white/5 pt-4">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
