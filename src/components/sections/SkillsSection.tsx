'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { Code2, Cpu, Layout, Wrench, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  programming: Code2,
  'computer-science': Cpu,
  development: Layout,
  tools: Wrench,
};

export const SkillsSection: React.FC = () => {
  const { skills, currentlyExploring } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { setCursorVariant, resetCursor } = useCursor();

  const filteredCategories = activeCategory === 'all' 
    ? skills 
    : skills.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          title="SKILLS & STACK"
          subtitle="Categorized engineering competencies based on practical understanding, not arbitrary percentage bars."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveCategory('all')}
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={resetCursor}
            className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            ALL CATEGORIES
          </button>
          {skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={resetCursor}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 font-mono text-sm font-bold text-white uppercase tracking-widest border-l-2 border-cyan-400 pl-4 py-1">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{category.title}</span>
                  <span className="text-white/30 text-xs font-normal">({category.skills.length} items)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      onMouseEnter={() => setCursorVariant('link')}
                      onMouseLeave={resetCursor}
                      className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold text-white tracking-tight font-sans group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                          {skill.level && (
                            <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 uppercase tracking-wider">
                              {skill.level}
                            </span>
                          )}
                        </div>

                        {skill.description && (
                          <p className="text-white/60 font-sans text-xs leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40 group-hover:text-white/70">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> ACTIVE COMPETENCY
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editable Currently Exploring Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-indigo-950/20 to-transparent border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-cyan-400/20">
            <Sparkles className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>ACTIVE LEARNING RADAR</span>
          </div>

          <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight font-sans">
            CURRENTLY EXPLORING
          </h3>
          <p className="text-white/60 font-sans text-sm max-w-2xl mb-8">
            Computer science is a dynamic discipline. I continuously expand my engineering knowledge through independent research, project prototyping, and core algorithm study.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {currentlyExploring.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-white/90 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
              >
                <span className="text-cyan-400 font-bold">0{index + 1}</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
