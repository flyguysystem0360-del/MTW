import React from 'react';
import { Sparkles, Radio, Music, HeartHandshake } from 'lucide-react';

export const AnnouncementTicker: React.FC = () => {
  const items = [
    { text: 'MISA WEST LIVE IN CONCERT', icon: Sparkles, color: 'text-[#FED100]' },
    { text: 'SUNDAY, DECEMBER 20, 2026', icon: Radio, color: 'text-white' },
    { text: 'THE DINGLE, B45 0BP', icon: Music, color: 'text-[#009B3A]' },
    { text: 'START TIME: 5 PM SHARP', icon: Radio, color: 'text-[#FED100]' },
    { text: 'DJ JAH MACKA ON THE SOUND SYSTEM', icon: Music, color: 'text-emerald-400' },
    { text: 'ENTRY £10 AT THE DOOR', icon: Sparkles, color: 'text-white' },
    { text: 'AUTHENTIC JAMAICAN FOOD & LICENSED BARS', icon: Radio, color: 'text-[#FED100]' },
    { text: 'FUNDRAISING GOAL: £1,600 ON GOFUNDME', icon: HeartHandshake, color: 'text-[#C8102E]' },
  ];

  return (
    <div className="relative z-20 w-full overflow-hidden bg-black/85 border-y border-white/10 backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-ticker py-2.5">
        {/* Render twice for continuous seamless loop */}
        {[...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6 text-xs md:text-sm tracking-wider uppercase font-semibold font-sans text-zinc-300"
            >
              <Icon className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
              <span className={item.color}>{item.text}</span>
              <span className="text-zinc-600 font-normal">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
