'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home', number: '01' },
  { label: 'ABOUT ME', href: '#about', number: '02' },
  { label: 'SKILLS', href: '#skills', number: '03' },
  { label: 'PROJECTS', href: '#projects', number: '04' },
  { label: 'JOURNEY', href: '#journey', number: '05' },
  { label: 'CONTACT ME', href: '#contact', number: '06' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scroll tracking
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-4 sm:px-8 md:px-12 ${
          isScrolled
            ? 'bg-[#08080a]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Personal Identity Badge */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-sm tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                SURYASH YADAV
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                B.TECH CSE 2ND YEAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={resetCursor}
                  className={`relative px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-[9px] text-cyan-400/70 font-light">{item.number}</span>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* CTA / Quick Status */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              onMouseEnter={() => setCursorVariant('button', 'SAY HI')}
              onMouseLeave={resetCursor}
              className="font-mono text-xs text-black font-bold bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              CONTACT ME →
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={resetCursor}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#08080a]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-28"
          >
            <div className="flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 mb-2">
                // NAVIGATION MENU
              </div>
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-cyan-400/10 border-cyan-400/40 text-cyan-400'
                        : 'bg-white/[0.02] border-white/5 text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-cyan-400">{item.number}</span>
                      <span className="font-sans font-bold text-lg tracking-wider">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </motion.a>
                );
              })}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-mono text-xs text-white/50 mb-3">SURYASH YADAV — GLA UNIVERSITY, MATHURA</p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block text-center font-mono text-xs text-black font-bold bg-cyan-400 py-3 rounded-xl uppercase tracking-wider"
              >
                LET'S BUILD SOMETHING →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
