import React, { useState } from 'react';
import {
  HeartHandshake,
  QrCode,
  ArrowUpRight,
  Share2,
  Check,
  Copy,
  Sparkles,
  Users,
  Mic2,
  Speaker,
  Utensils,
  Maximize2,
  ShieldCheck,
} from 'lucide-react';
import { HeritageBar } from './HeritageBar';

interface FundraisingSectionProps {
  onZoomQr: () => void;
}

export const FundraisingSection: React.FC<FundraisingSectionProps> = ({ onZoomQr }) => {
  const [copied, setCopied] = useState(false);
  const donationUrl = 'https://gofund.me/297ce37b2';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(donationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Misa West Live in Concert — Reggae Fundraiser',
          text: 'Support the fundraising campaign for Misa West Live in Concert at The Dingle! Target: £1,600.',
          url: donationUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="fundraiser" className="relative py-16 md:py-24 bg-[#0e1014] overflow-hidden">
      {/* Decorative ambient stage glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FED100]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#009B3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 6-color cultural cues */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FED100]/10 border border-[#FED100]/30 text-xs font-bold text-[#FED100] uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>OFFICIAL FUNDRAISING MISSION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline tracking-tight text-white uppercase">
            HELP BRING MISA WEST <span className="text-[#FED100]">LIVE TO THE STAGE</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We are coming together as a community of roots reggae lovers, Jamaican diaspora, and live music supporters to make this landmark live concert possible.
          </p>
        </div>

        {/* Central Campaign Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900/95 to-zinc-950 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
          <HeritageBar height="h-2" />

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Mission, Target & Impact (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Official Target Card */}
                <div className="p-6 rounded-2xl bg-black/75 border border-white/10 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FED100]/15 to-transparent pointer-events-none" />

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Official Campaign Target
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#009B3A]/20 border border-[#009B3A]/40 text-xs font-semibold text-[#009B3A]">
                      <Sparkles className="w-3 h-3" />
                      Direct on GoFundMe
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-headline text-white tracking-tight">
                      £1,600
                    </span>
                    <span className="text-sm text-[#FED100] font-sans font-semibold">
                      Production Target Goal
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300">
                    All contributions go directly towards the live concert production, venue hire at The Dingle (B45 0BP), sound engineering, and authentic community gathering.
                  </p>

                  <div className="pt-1 flex items-center gap-2 text-xs text-zinc-400">
                    <ShieldCheck className="w-4 h-4 text-[#009B3A]" />
                    <span>Concert admission is separate: £10 at the door on the night.</span>
                  </div>
                </div>

                {/* Transparent Pillars */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    What Your Support Directly Funds:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                      <Speaker className="w-5 h-5 text-[#FED100] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Sound &amp; Stage Lighting</div>
                        <div className="text-xs text-zinc-400">Professional PA rig &amp; DJ Jah Macka console</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                      <Mic2 className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Live Artist Performance</div>
                        <div className="text-xs text-zinc-400">Rehearsals, travel, and live concert headline</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                      <Users className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Venue Logistics</div>
                        <div className="text-xs text-zinc-400">The Dingle B45 venue hire &amp; community hall</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                      <Utensils className="w-5 h-5 text-[#012169] bg-white rounded p-0.5 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Cultural Hospitality</div>
                        <div className="text-xs text-zinc-400">Authentic Jamaican kitchen &amp; bar setup</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={donationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FED100] to-[#ffd000] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(254,209,0,0.5)]"
                  >
                    <HeartHandshake className="w-5 h-5" />
                    <span>DONATE ON GOFUNDME</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-600/60 text-xs sm:text-sm font-semibold transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#009B3A]" />
                        <span>LINK COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>COPY GOFUNDME LINK</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border border-white/10 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <Share2 className="w-4 h-4 text-[#FED100]" />
                    <span>SHARE CAMPAIGN</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Scan to Donate QR Card (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-2xl bg-black border-2 border-[#FED100]/60 p-5 shadow-2xl relative group">
                  {/* Glowing perimeter */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#009B3A]/40 via-[#FED100]/40 to-[#C8102E]/40 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FED100] uppercase tracking-wider">
                      <QrCode className="w-4 h-4" />
                      <span>OFFICIAL GOFUNDME QR CODE</span>
                    </div>

                    {/* QR Code Anchor & Image */}
                    <a
                      href={donationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 rounded-xl bg-white cursor-pointer hover:scale-[1.03] transition-transform duration-300 shadow-xl block group/qr"
                      title="Click to open GoFundMe campaign directly or scan with your phone"
                    >
                      <img
                        src="/assets/aistudio/QR_Code_7996fe3f.png"
                        alt="Official GoFundMe QR code to support Misa West Live in Concert"
                        className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg"
                      />
                      <div className="absolute bottom-4 inset-x-4 bg-black/90 backdrop-blur-sm text-[#FED100] text-xs font-bold py-1.5 px-3 rounded shadow-lg flex items-center justify-center gap-1.5 opacity-90 group-hover/qr:opacity-100 transition-opacity">
                        <span>OPEN GOFUNDME (297ce37b2)</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </a>

                    <div className="space-y-1">
                      <p className="text-xs text-zinc-300 font-medium">
                        Scan with your smartphone camera or click to open directly
                      </p>
                      <div className="text-[11px] text-[#FED100] font-mono font-bold">
                        https://gofund.me/297ce37b2
                      </div>
                    </div>

                    <div className="w-full flex gap-2">
                      <a
                        href={donationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-[#009B3A] hover:bg-[#008230] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>DONATE ONLINE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={onZoomQr}
                        className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1 border border-white/10"
                        title="Zoom QR Code full screen"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#FED100]" />
                        <span>ZOOM</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
