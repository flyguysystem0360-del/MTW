import React from 'react';
import { HeartHandshake, ExternalLink, Calendar, MapPin, Youtube, Disc3 } from 'lucide-react';
import { CulturalMotifBadge, HeritageBar } from './HeritageBar';
import { downloadCalendarInvite } from '../utils/calendar';

interface FooterProps {
  onOpenDonateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonateModal }) => {
  return (
    <footer className="relative bg-black text-zinc-400 border-t border-white/10 overflow-hidden">
      {/* 6-Color Intentional Heritage Ribbon */}
      <HeritageBar height="h-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Artist & Event */}
          <div className="space-y-4">
            <div className="text-3xl font-headline tracking-wide text-white uppercase leading-none">
              MISA <span className="text-[#FED100]">WEST</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Live in Concert — Fundraising Campaign. Celebrating the authentic pulse of Jamaican roots reggae and sound system culture in the United Kingdom.
            </p>
            <CulturalMotifBadge compact />
          </div>

          {/* Col 2: Event Breakdown */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FED100]">
              Event Information
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-[#009B3A]" />
                <span>Sunday, December 20, 2026 (5 PM Sharp)</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>The Dingle, B45 0BP, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <Disc3 className="w-3.5 h-3.5 text-[#FED100]" />
                <span>DJ Jah Macka on the Sound System</span>
              </li>
              <li className="text-zinc-400">
                Admission: £10 at the door · Authentic Jamaican food &amp; open bars
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#009B3A]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://gofund.me/297ce37b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FED100] transition-colors flex items-center gap-1.5"
                >
                  <span>GoFundMe Campaign Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={downloadCalendarInvite}
                  className="hover:text-[#009B3A] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Download .ICS Calendar Event</span>
                </button>
              </li>
              <li>
                <a
                  href="#music"
                  className="hover:text-white transition-colors"
                >
                  Featured Music Videos (3 Tracks)
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Dingle+B45+0BP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Directions to The Dingle</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Fundraising Target & QR */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
              Fundraising Target
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <div className="text-2xl font-headline text-white">
                £1,600 <span className="text-xs font-sans text-zinc-400 font-normal">Goal</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Transparent campaign to fund venue hire, live sound system, lighting, and artist staging.
              </p>
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="w-full py-2 px-3 rounded-lg bg-[#FED100] text-black text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Donate / Scan QR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Misa West Live in Concert. All rights reserved. One Love.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#009B3A] font-semibold">Green</span>
            <span className="text-[#FED100] font-semibold">Gold</span>
            <span className="text-zinc-300 font-semibold">Black</span>
            <span className="text-[#C8102E] font-semibold">Red</span>
            <span className="text-white font-semibold">White</span>
            <span className="text-[#012169] font-semibold">Blue</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
