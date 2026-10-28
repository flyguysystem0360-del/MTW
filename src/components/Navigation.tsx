import React, { useState } from 'react';
import {
  Menu,
  X,
  HeartHandshake,
  Lightbulb,
  Share2,
  CalendarPlus,
  Radio,
  Sliders,
} from 'lucide-react';
import { CulturalMotifBadge, HeritageBar } from './HeritageBar';
import { downloadCalendarInvite } from '../utils/calendar';
import type { LightingMode } from '../types';

interface NavigationProps {
  lightingMode: LightingMode['id'];
  onChangeLighting: (mode: LightingMode['id']) => void;
  onOpenDonateModal: () => void;
  onOpenShareModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  lightingMode,
  onChangeLighting,
  onOpenDonateModal,
  onOpenShareModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightingDropdownOpen, setLightingDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Event Info', href: '#event-info' },
    { label: 'Music & Videos', href: '#music' },
    { label: 'Fundraising Goal', href: '#fundraiser' },
    { label: 'Venue & Travel', href: '#venue' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/85 backdrop-blur-xl border-b border-white/10">
      <HeritageBar height="h-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Artist Identity */}
          <a
            href="#"
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FED100] rounded-lg"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-headline tracking-wider text-white uppercase leading-none">
                MISA <span className="text-[#FED100]">WEST</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 tracking-wider uppercase font-sans">
                Live in Concert · Reggae Fundraiser
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#FED100] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FED100] rounded px-1 py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Stage Lighting FX Toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLightingDropdownOpen(!lightingDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white hover:border-[#FED100]/50 transition-colors"
                title="Stage Lighting Effects"
              >
                <Sliders className="w-3.5 h-3.5 text-[#FED100]" />
                <span className="capitalize">{lightingMode} Lights</span>
              </button>

              {lightingDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-zinc-900 border border-white/15 p-1.5 shadow-2xl z-50 space-y-1"
                  onMouseLeave={() => setLightingDropdownOpen(false)}
                >
                  <div className="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Stage FX Mode
                  </div>
                  <button
                    onClick={() => {
                      onChangeLighting('full');
                      setLightingDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                      lightingMode === 'full'
                        ? 'bg-[#FED100] text-black font-bold'
                        : 'text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <span>Concert Stage (High)</span>
                    <span className="text-[10px] opacity-75">Beams &amp; Sparkles</span>
                  </button>
                  <button
                    onClick={() => {
                      onChangeLighting('mellow');
                      setLightingDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                      lightingMode === 'mellow'
                        ? 'bg-[#FED100] text-black font-bold'
                        : 'text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <span>Mellow Glow</span>
                    <span className="text-[10px] opacity-75">Subtle</span>
                  </button>
                  <button
                    onClick={() => {
                      onChangeLighting('off');
                      setLightingDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                      lightingMode === 'off'
                        ? 'bg-[#FED100] text-black font-bold'
                        : 'text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <span>Lights Off</span>
                    <span className="text-[10px] opacity-75">Static</span>
                  </button>
                </div>
              )}
            </div>

            {/* Share Trigger */}
            <button
              type="button"
              onClick={onOpenShareModal}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Share event"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Save Calendar */}
            <button
              type="button"
              onClick={downloadCalendarInvite}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-[#009B3A] transition-colors"
              title="Save to Calendar (.ics)"
            >
              <CalendarPlus className="w-4 h-4" />
            </button>

            {/* Prominent Donate CTA */}
            <button
              type="button"
              onClick={onOpenDonateModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FED100] hover:bg-yellow-400 text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(254,209,0,0.3)] hover:scale-105"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>SUPPORT CAMPAIGN</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenDonateModal}
              className="px-3 py-1.5 rounded-lg bg-[#FED100] text-black text-xs font-extrabold uppercase tracking-wider"
            >
              DONATE
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-white/10 p-4 space-y-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:bg-zinc-900 hover:text-[#FED100]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Stage Lighting FX:</span>
              <div className="flex gap-1">
                {(['full', 'mellow', 'off'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => onChangeLighting(m)}
                    className={`px-2 py-1 rounded text-[11px] font-bold uppercase ${
                      lightingMode === m
                        ? 'bg-[#FED100] text-black'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShareModal();
                }}
                className="py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 text-xs font-bold uppercase flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5 text-[#FED100]" />
                <span>Share</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadCalendarInvite();
                }}
                className="py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 text-xs font-bold uppercase flex items-center justify-center gap-1.5"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#009B3A]" />
                <span>Save Date</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
