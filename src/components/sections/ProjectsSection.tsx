'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectModal } from '../ui/ProjectModal';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { useCursor } from '@/context/CursorContext';
import { Github, ExternalLink, ArrowUpRight, Code, Layers, Terminal } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          title="SELECTED PROJECTS"
          subtitle="Engineering builds, algorithm visualizers, and system tools created to solve practical problems."
        />

        {/* Large Editorial Project Cards Stack */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setCursorVariant('project', 'VIEW')}
              onMouseLeave={resetCursor}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all duration-500 p-8 sm:p-12 overflow-hidden flex flex-col lg:flex-row gap-8 justify-between items-stretch"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full blur-[100px] transition-all duration-700 pointer-events-none" />

              {/* Left Column: Number, Title, Description */}
              <div className="flex-1 flex flex-col justify-between space-y-6 z-10">
                <div>
                  <div className="flex items-center gap-4 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
                    <span className="text-xl font-bold font-sans text-white/40 group-hover:text-cyan-400 transition-colors">
                      PROJECT {project.number}
                    </span>
                    <span className="text-white/20">•</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="font-mono text-sm text-cyan-400/80 mb-4">
                    {project.subtitle}
                  </div>

                  <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80 group-hover:border-cyan-400/30 group-hover:text-cyan-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-black bg-cyan-400 px-5 py-2.5 rounded-full group-hover:bg-cyan-300 transition-colors">
                    EXPAND DETAILS →
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Code Window / Graphic Preview Card */}
              <div className="w-full lg:w-[420px] rounded-2xl bg-[#060608] border border-white/10 p-6 flex flex-col justify-between z-10 group-hover:border-cyan-400/30 transition-all">
                <div className="flex items-center justify-between font-mono text-[11px] text-white/40 border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SYSTEM SPEC</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> VERIFIED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-white/70 my-auto py-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">&gt;</span>
                      <span className="text-white/80 line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
                  <span>TAP CARD TO VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Project Details Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
