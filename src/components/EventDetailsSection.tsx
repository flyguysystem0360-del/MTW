import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Disc3,
  Ticket,
  UtensilsCrossed,
  Wine,
  CalendarPlus,
  Volume2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { HeritageBar } from './HeritageBar';
import { downloadCalendarInvite, getGoogleCalendarUrl } from '../utils/calendar';
import { playDubSiren } from '../utils/soundFx';

export const EventDetailsSection: React.FC = () => {
  const [sirenActive, setSirenActive] = useState(false);

  const triggerSound = (type: 'siren' | 'laser') => {
    playDubSiren(type);
    setSirenActive(true);
    setTimeout(() => setSirenActive(false), 800);
  };

  return (
    <section id="event-info" className="relative py-16 md:py-24 bg-[#0c0d10] overflow-hidden">
      {/* Background concert stage atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/assets/aistudio/pw8APbqRO-hOwTD2d5PZKaRIYfVGM50zs-aYnbTc-wdaCZ86xllgaYO4CqNRo0O4I3BAlefDRfVRIcr-oDrurXE8kU46sbAbBb-tmFD1-K3oOhMbIPzvHfBqwCf8QWnDFozBEvClwz2wE9u4x5jlvF24ujv6ssBYBdWLEYirCqsHsRqKaemAjdZQPOcisQ_w_ae41bc5d.jpg"
          alt="Concert stage lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d10] via-transparent to-[#0c0d10]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009B3A]/15 border border-[#009B3A]/40 text-xs font-bold text-[#009B3A] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE CONCERT PROGRAMME &amp; EXPERIENCE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline tracking-tight text-white uppercase">
            EVERYTHING YOU NEED <span className="text-[#FED100]">TO KNOW</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            A complete evening of authentic live roots reggae, community unity, sound system basslines, and traditional Caribbean culinary excellence.
          </p>
        </div>

        {/* 6 Grid Cards for Real Event Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Date & Showtime */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#FED100]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#009B3A]/20 text-[#009B3A] border border-[#009B3A]/40">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#FED100] uppercase font-mono tracking-wider">
                  SCHEDULED
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  Sunday, Dec 20, 2026
                </h3>
                <div className="flex items-center gap-2 text-zinc-300 text-sm mt-1">
                  <Clock className="w-4 h-4 text-[#FED100]" />
                  <span className="font-semibold text-white">5:00 PM Sharp</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Doors open early to let everyone settle in, enjoy refreshments, and experience DJ Jah Macka warming up the sound system.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex gap-2">
              <button
                type="button"
                onClick={downloadCalendarInvite}
                className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#009B3A]" />
                <span>Save .ICS</span>
              </button>
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                title="Add to Google Calendar"
              >
                <span>Google Cal</span>
                <ExternalLink className="w-3 h-3 text-[#FED100]" />
              </a>
            </div>
          </div>

          {/* Card 2: Venue Location */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#C8102E]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-white uppercase font-mono tracking-wider bg-[#012169] px-2 py-0.5 rounded">
                  UK B45
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  The Dingle, B45 0BP
                </h3>
                <div className="text-xs text-zinc-300 font-medium mt-1">
                  Birmingham &amp; West Midlands Community Venue
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                A welcoming live music hub with dedicated stage area, full dance space, and spacious social facilities.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Dingle+B45+0BP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FED100]" />
              </a>
            </div>
          </div>

          {/* Card 3: DJ & Sound System */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#009B3A]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#FED100]/20 text-[#FED100] border border-[#FED100]/40">
                  <Disc3 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#009B3A] uppercase font-mono tracking-wider">
                  SOUND SYSTEM
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  DJ Jah Macka
                </h3>
                <div className="text-xs text-zinc-300 font-medium mt-1">
                  Roots, Dub, Dancehall &amp; Lovers Rock
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                DJ Jah Macka brings heavy basslines, classic vinyl cuts, and uplifting community sound system energy from 5 PM through the evening.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex gap-2">
              <button
                type="button"
                onClick={() => triggerSound('siren')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  sirenActive
                    ? 'bg-[#FED100] text-black shadow-lg scale-105'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-[#FED100]'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Dub Siren FX</span>
              </button>
              <button
                type="button"
                onClick={() => triggerSound('laser')}
                className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold flex items-center justify-center gap-1"
                title="Laser Dub Drop"
              >
                <span>Laser</span>
              </button>
            </div>
          </div>

          {/* Card 4: Door Entry & Admission */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#FED100]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/10 text-white border border-white/20">
                  <Ticket className="w-6 h-6 text-[#FED100]" />
                </div>
                <span className="text-xs font-bold text-white bg-[#009B3A] px-2.5 py-0.5 rounded-full font-mono">
                  £10 DOOR
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  Entry: £10 at the Door
                </h3>
                <div className="text-xs text-zinc-300 font-medium mt-1">
                  Affordable community admission
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Tickets available on the door upon arrival. Arrive early to guarantee entry and secure prime viewing for Misa West’s live set.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Cash &amp; Card accepted at door</span>
              <span className="text-[#009B3A] font-semibold">18+ / Family Friendly</span>
            </div>
          </div>

          {/* Card 5: Jamaican Food On Sale */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#009B3A]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#009B3A]/20 text-[#009B3A] border border-[#009B3A]/40">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#FED100] uppercase font-mono tracking-wider">
                  HOT CARIBBEAN FOOD
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  Authentic Jamaican Food
                </h3>
                <div className="text-xs text-zinc-300 font-medium mt-1">
                  Freshly prepared hot Caribbean cuisine
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Authentic Jamaican jerk seasoning on sale throughout the event: delicious Jerk Chicken, Jamaican patties, rice &amp; peas, festival, and fried plantain.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-[#FED100] font-semibold">
              Jerk Chicken · Patties · Rice &amp; Peas · Festival
            </div>
          </div>

          {/* Card 6: Licensed Bar */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-[#C8102E]/60 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40">
                  <Wine className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-white uppercase font-mono tracking-wider bg-[#012169] px-2 py-0.5 rounded">
                  BARS OPEN
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-headline uppercase text-white tracking-wide">
                  Fully Licensed Bars Open
                </h3>
                <div className="text-xs text-zinc-300 font-medium mt-1">
                  Chilled drinks &amp; Caribbean favorites
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Full bar service open throughout the night featuring ice-cold Red Stripe beer, authentic Jamaican rum punch, fine spirits, wines, ciders, and soft drinks.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-zinc-300 font-semibold flex items-center justify-between">
              <span>Red Stripe &amp; Rum Punch</span>
              <span className="text-[#C8102E]">Full Licensed Bar</span>
            </div>
          </div>
        </div>

        {/* Six-Color Heritage Divider */}
        <HeritageBar className="rounded-full shadow-lg" height="h-2" />
      </div>
    </section>
  );
};
