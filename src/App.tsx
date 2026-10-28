/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StageLighting } from './components/StageLighting';
import { Navigation } from './components/Navigation';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Hero } from './components/Hero';
import { FundraisingSection } from './components/FundraisingSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { MusicSection } from './components/MusicSection';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { DonateModal, ShareModal } from './components/Modals';
import type { LightingMode } from './types';

export default function App() {
  const [lightingMode, setLightingMode] = useState<LightingMode['id']>('full');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setLightingMode('mellow');
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setLightingMode('mellow');
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0c0e] text-zinc-100 flex flex-col font-sans selection:bg-[#FED100] selection:text-black">
      {/* Dynamic Stage Lighting & Sparkles Overlay */}
      <StageLighting mode={lightingMode} />

      {/* Primary Sticky Header Navigation */}
      <Navigation
        lightingMode={lightingMode}
        onChangeLighting={setLightingMode}
        onOpenDonateModal={() => setIsDonateModalOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Continuous Live Event Marquee Strip */}
      <AnnouncementTicker />

      {/* Main Content Area */}
      <main className="flex-1 relative z-20">
        {/* Hero Section */}
        <Hero
          onOpenDonateModal={() => setIsDonateModalOpen(true)}
          onExploreVideos={() => handleScrollToSection('music')}
        />

        {/* Dedicated Fundraising Campaign Section */}
        <FundraisingSection
          onZoomQr={() => setIsDonateModalOpen(true)}
        />

        {/* Real Event Details & Soundsystem Experience */}
        <EventDetailsSection />

        {/* Music Videos & Discography Showcase */}
        <MusicSection />

        {/* Venue Location & Travel Info */}
        <VenueSection />
      </main>

      {/* Footer with 6-Color Identity */}
      <Footer onOpenDonateModal={() => setIsDonateModalOpen(true)} />

      {/* Interactive Modals */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
