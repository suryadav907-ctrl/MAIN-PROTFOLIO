'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { MagneticButton } from '../ui/MagneticButton';
import { portfolioData } from '@/data/portfolioData';
import { useCursor } from '@/context/CursorContext';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { personalInfo } = portfolioData;
  const { setCursorVariant, resetCursor } = useCursor();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setCursorVariant('copied', 'COPIED!');
    setTimeout(() => {
      setCopiedEmail(false);
      resetCursor();
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate submission API & trigger celebratory particle burst
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#ffffff']
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          title="CONTACT ME"
          subtitle="Open for technical discussions, student developer initiatives, and engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Massive Editorial Callout & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans leading-[1.05] mb-4">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  SOMETHING.
                </span>
              </h3>
              <p className="text-white/70 font-sans text-base sm:text-lg font-light leading-relaxed">
                Have an idea, opportunity, or just want to talk tech? Reach out directly via form or through email and social channels below.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">// DIRECT EMAIL</div>
                <div className="font-mono text-sm sm:text-base font-bold text-white">{personalInfo.email}</div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={resetCursor}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center gap-2 font-mono text-xs"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Social Links List */}
            <div className="space-y-4 pt-4">
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400">// CONNECT CHANNELS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={resetCursor}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/5 text-white flex items-center gap-3 transition-all"
                >
                  <Github className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-bold">GitHub</div>
                    <div className="text-[10px] text-white/50">@suryash-yadav</div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={resetCursor}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/5 text-white flex items-center gap-3 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-bold">LinkedIn</div>
                    <div className="text-[10px] text-white/50">Suryash Yadav</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-extrabold text-white font-sans">MESSAGE TRANSMITTED</h4>
                <p className="text-white/70 font-sans text-sm max-w-md mx-auto">
                  Thank you for reaching out! Your message has been sent successfully. Suryash will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                  className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs hover:bg-white/20 transition-all uppercase"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or project opportunity details..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  cursorText="SEND"
                  className="w-full py-4 rounded-xl bg-cyan-400 text-black font-mono font-bold text-sm uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
