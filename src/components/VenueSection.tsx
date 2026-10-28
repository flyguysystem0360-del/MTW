import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Car,
  Train,
  HelpCircle,
  Shield,
  Sparkles,
} from 'lucide-react';
import { HeritageBar } from './HeritageBar';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const postcode = 'B45 0BP';
  const fullAddress = 'The Dingle, B45 0BP, United Kingdom';

  const handleCopyPostcode = async () => {
    try {
      await navigator.clipboard.writeText(postcode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="venue" className="relative py-16 md:py-24 bg-[#090a0d] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Venue Details & Directions (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C8102E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION &amp; ARRIVAL</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-headline tracking-tight text-white uppercase">
                THE DINGLE, <span className="text-[#FED100]">B45 0BP</span>
              </h2>
              <p className="text-sm text-zinc-300">
                Join us in the West Midlands for an electric evening of live music. Accessible via local transit, bus routes, and major Midlands road networks.
              </p>
            </div>

            {/* Address Interactive Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-white/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase font-bold text-zinc-400">Venue Address</div>
                  <div className="text-xl font-bold text-white mt-1">The Dingle</div>
                  <div className="text-sm font-semibold text-[#FED100]">Postcode: B45 0BP</div>
                  <div className="text-xs text-zinc-400 mt-1">West Midlands / Birmingham Area</div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPostcode}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#009B3A]" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>COPY POSTCODE</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-[#012169] hover:bg-[#022c8a] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-blue-400/30 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#FED100]" />
                  <span>DIRECTIONS IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Travel Guidance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase">
                  <Car className="w-4 h-4 text-[#009B3A]" />
                  <span>By Car &amp; Parking</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Easily accessible via local A-roads in the B45 area. On-street and nearby local parking options available. Please park considerately for neighbors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase">
                  <Train className="w-4 h-4 text-[#FED100]" />
                  <span>Public Transit</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Connected via regional West Midlands bus services and connecting rail stations in South Birmingham. Check regional timetables for Sunday schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Event FAQ & Practical Info (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#009B3A]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>ESSENTIAL CONCERT FAQ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-headline tracking-tight text-white uppercase">
                COMMONLY ASKED QUESTIONS
              </h3>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>How much is admission at the door?</span>
                  <span className="text-xs font-mono font-bold text-[#FED100]">£10</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Admission is £10 at the door on the night. You can pay with cash or card upon entry.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>What time should I arrive?</span>
                  <span className="text-xs font-mono font-bold text-[#009B3A]">5:00 PM SHARP</span>
                </div>
                <p className="text-xs text-zinc-400">
                  The event starts at 5:00 PM sharp with DJ Jah Macka powering the sound system. We recommend arriving around 4:45 PM to find comfortable seating and order food.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>What food and refreshments are available?</span>
                  <span className="text-xs font-mono font-bold text-[#FED100]">JAMAICAN &amp; BARS</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Authentic Jamaican food is on sale including Jerk chicken, patties, rice &amp; peas, festival, and plantains. Fully licensed bars are open serving Red Stripe, rum punch, and soft drinks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>How does the £1,600 fundraising campaign work?</span>
                  <span className="text-xs font-mono font-bold text-[#C8102E]">GOFUNDME</span>
                </div>
                <p className="text-xs text-zinc-400">
                  The £1,600 goal directly covers production, sound engineer hire, venue hire, and artist expenses. Contributions are made via the official GoFundMe page or mobile QR code.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-white/10 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#009B3A] shrink-0" />
              <div className="text-xs text-zinc-300">
                <strong className="text-white">Community &amp; Safe Space:</strong> A welcoming, respectful, and family-friendly atmosphere celebrating Jamaican reggae music and cultural unity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
