'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, Github, Code, CheckCircle, Terminal } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '@/context/CursorContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0d0d12] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={resetCursor}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Specs */}
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            <span>PROJECT {project.number}</span>
            <span className="text-white/20">•</span>
            <span>{project.category}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans mb-2">
            {project.title}
          </h2>
          <p className="text-white/60 font-mono text-sm sm:text-base mb-6">
            {project.subtitle}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Long Description */}
          <div className="space-y-6 text-white/80 font-sans text-sm sm:text-base leading-relaxed border-t border-white/10 pt-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40">// ARCHITECTURE OVERVIEW</h3>
            <p>{project.longDescription}</p>

            {/* Key Highlights */}
            {project.highlights.length > 0 && (
              <div className="space-y-3 pt-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">// SYSTEM HIGHLIGHTS</h4>
                <ul className="space-y-2 font-sans text-sm text-white/70">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Snippet Box */}
            {project.codeSnippet && (
              <div className="pt-4">
                <div className="flex items-center justify-between font-mono text-xs text-white/50 bg-black/60 px-4 py-2 rounded-t-xl border border-white/10 border-b-0">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> IMPLEMENTATION SNIPPET
                  </span>
                  <span>SRC</span>
                </div>
                <pre className="p-4 rounded-b-xl bg-[#050507] border border-white/10 font-mono text-xs text-cyan-200/90 overflow-x-auto">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 mt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all"
            >
              <Github className="w-4 h-4" /> VIEW SOURCE CODE
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/20 font-mono font-bold text-xs uppercase tracking-wider transition-all"
              >
                <ExternalLink className="w-4 h-4" /> LIVE DEMO →
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
