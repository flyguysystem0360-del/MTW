import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  HeartHandshake,
  Play,
  Volume2,
  CalendarPlus,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CulturalMotifBadge, HeritageBar } from './HeritageBar';
import { downloadCalendarInvite } from '../utils/calendar';
import { playDubSiren } from '../utils/soundFx';

interface HeroProps {
  onOpenDonateModal: () => void;
  onExploreVideos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonateModal, onExploreVideos }) => {
  // Live Countdown to Sunday, December 20, 2026, 17:00:00 GMT
  const targetDate = new Date('2026-12-20T17:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [soundFeedback, setSoundFeedback] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleDubHorn = () => {
    playDubSiren('siren');
    setSoundFeedback(true);
    setTimeout(() => setSoundFeedback(false), 900);
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Concert Imagery with Warm Stage Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/aistudio/EYAb3uo9we__u7J_730b7364.jpg"
          alt="Live reggae concert atmosphere"
          className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/85 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c0d10]/70 to-[#0c0d10]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Cultural Heritage Strip & Event Ribbon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <CulturalMotifBadge />

          <button
            onClick={handleDubHorn}
            title="Sound System FX - Authentic Dub Siren"
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              soundFeedback
                ? 'bg-[#FED100] text-black border-[#FED100] shadow-[0_0_20px_rgba(254,209,0,0.8)] scale-105'
                : 'bg-zinc-900/80 text-zinc-300 border-zinc-700/80 hover:border-[#FED100]/60 hover:text-[#FED100]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 text-[#009B3A]" />
            <span>SOUND SYSTEM CHECK</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-[#FED100] font-mono">
              SIREN FX
            </span>
          </button>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Concert Announcement Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#FED100]">
                <span className="w-2 h-2 rounded-full bg-[#009B3A] animate-ping" />
                <span>OFFICIAL LIVE CONCERT &amp; FUNDRAISER</span>
                <span className="text-zinc-500">·</span>
                <span className="text-[#C8102E]">UK &amp; JAMAICA UNITED</span>
              </div>

              {/* Dominant Artist Identity */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-headline tracking-tight text-white uppercase leading-[0.88] drop-shadow-lg">
                MISA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FED100] via-[#009B3A] to-[#FED100]">WEST</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-zinc-100 tracking-tight">
                Live in Concert — Fundraising Campaign
              </p>
            </div>

            {/* Event Key Facts Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-zinc-900/90 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#009B3A] via-[#FED100] to-[#C8102E]" />

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#009B3A]/20 text-[#009B3A] border border-[#009B3A]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Date</div>
                  <div className="text-sm font-bold text-white">Sunday, Dec 20, 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FED100]/20 text-[#FED100] border border-[#FED100]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Time</div>
                  <div className="text-sm font-bold text-white">5 PM Sharp</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Venue</div>
                  <div className="text-sm font-bold text-white">The Dingle, B45 0BP</div>
                </div>
              </div>
            </div>

            {/* Campaign Summary & Mission statement */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-2xl">
              Experience the pulse of authentic Jamaican roots reggae and sound system culture live on stage.
              Join us at The Dingle for an unforgettable community celebration powered by selector{' '}
              <strong className="text-white font-semibold">DJ Jah Macka</strong>, delicious authentic Jamaican food,
              licensed bars, and real community vibes. All contributions support our £1,600 concert production target.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary GoFundMe CTA */}
              <a
                href="https://gofund.me/297ce37b2"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FED100] via-[#ffd726] to-[#009B3A] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(254,209,0,0.45)] hover:shadow-[0_0_40px_rgba(254,209,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <HeartHandshake className="w-5 h-5 text-black" />
                <span>SUPPORT THE CAMPAIGN</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* QR Code Quick View Modal trigger */}
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-[#FED100] text-sm font-semibold transition-all"
              >
                <span>SCAN QR / £1,600 GOAL</span>
              </button>

              {/* Explore Music Videos Button */}
              <button
                type="button"
                onClick={onExploreVideos}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#012169]/90 hover:bg-[#012169] text-white border border-white/20 hover:border-white text-sm font-semibold transition-all shadow-md"
              >
                <Play className="w-4 h-4 text-[#FED100] fill-[#FED100]" />
                <span>EXPLORE MUSIC VIDEOS</span>
              </button>

              {/* Add to Calendar Download */}
              <button
                type="button"
                onClick={downloadCalendarInvite}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
                title="Download .ics calendar reminder"
              >
                <CalendarPlus className="w-4 h-4 text-[#009B3A]" />
                <span>SAVE DATE (.ICS)</span>
              </button>
            </div>

            {/* Quick Live Event Credentials */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#009B3A]" />
                <span>£10 Entry at the Door</span>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">Jamaican Jerk Food On Sale</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">Open Bars</span>
              <span className="text-zinc-600">·</span>
              <span className="text-[#FED100] font-semibold">Goal: £1,600</span>
            </div>
          </div>

          {/* Right Column: Verified Artist Portrait & Live Countdown (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight Halo behind Artist */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#009B3A]/30 via-[#FED100]/25 to-[#C8102E]/25 rounded-3xl blur-2xl opacity-75" />

            {/* Main Artist Card */}
            <div className="relative rounded-3xl bg-zinc-950/90 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Top Accent Strip */}
              <HeritageBar height="h-2" />

              {/* Verified Portrait Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-900 group">
                <img
                  src="/assets/aistudio/Fundraiser-by-Craig-West-Misa-West-live-in-Concert-10-26-2026_06_40_PM_f00aed6c.png"
                  alt="Misa West portrait - Official concert artist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Soft Lens Flare & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

                {/* Verified Artist Pill Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-[#FED100]/50 backdrop-blur-md text-[11px] font-bold text-[#FED100]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FED100]" />
                  <span>OFFICIAL ARTIST PORTRAIT</span>
                </div>

                {/* Stage Lighting Color Glow Corner */}
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#009B3A] shadow-[0_0_8px_#009B3A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FED100] shadow-[0_0_8px_#FED100]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] shadow-[0_0_8px_#C8102E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#012169] shadow-[0_0_8px_#012169]" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 inset-x-3 flex items-end justify-between">
                  <div>
                    <div className="text-xl font-headline tracking-wide text-white drop-shadow">
                      MISA WEST
                    </div>
                    <div className="text-xs text-zinc-300 font-medium">
                      Lead Vocalist &amp; Reggae Artist
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#009B3A]/90 border border-emerald-400/40 text-[11px] font-bold text-white shadow-md">
                    LIVE DEC 20
                  </div>
                </div>
              </div>

              {/* Live Concert Countdown Widget */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-zinc-900/90 to-zinc-950 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-200">
                    <Clock className="w-3.5 h-3.5 text-[#FED100]" />
                    <span>COUNTDOWN TO SHOWTIME</span>
                  </span>
                  <span className="text-[#009B3A] font-mono">5:00 PM GMT</span>
                </div>

                {/* 4-Digit Timer Grid */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-headline text-white tracking-wider">
                      {timeLeft.days}
                    </div>
                    <div className="text-[10px] font-semibold text-zinc-400 uppercase">Days</div>
                  </div>

                  <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-headline text-[#FED100] tracking-wider">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-semibold text-zinc-400 uppercase">Hours</div>
                  </div>

                  <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-headline text-[#009B3A] tracking-wider">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-semibold text-zinc-400 uppercase">Mins</div>
                  </div>

                  <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-headline text-[#C8102E] tracking-wider">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-semibold text-zinc-400 uppercase">Secs</div>
                  </div>
                </div>

                {/* Micro Guarantee bar */}
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <span>DJ Jah Macka Sound System</span>
                  <span className="text-[#FED100] font-medium">Sunday Dec 20, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
