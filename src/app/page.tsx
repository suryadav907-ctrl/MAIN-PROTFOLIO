import React from 'react';
import { LenisProvider } from '@/components/layout/LenisProvider';
import { Navbar } from '@/components/layout/Navbar';
import { CosmicBackground } from '@/components/visuals/CosmicBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-[#050508] text-white selection:bg-cyan-500/40 selection:text-cyan-200 relative overflow-x-hidden">
        {/* Full-Page Persistent Cosmic Engine Background */}
        <CosmicBackground />

        {/* Floating Navbar */}
        <Navbar />

        {/* Section Contents with Translucent Cosmic Backdrops */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </LenisProvider>
  );
}
