import React from 'react';

interface HeritageBarProps {
  className?: string;
  height?: string;
}

export const HeritageBar: React.FC<HeritageBarProps> = ({
  className = '',
  height = 'h-1.5',
}) => {
  return (
    <div
      className={`w-full flex overflow-hidden ${height} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {/* Jamaican Leading Colors (60% weight) */}
      <div className="flex-[3] bg-[#009B3A]" title="Jamaican Green" />
      <div className="flex-[2] bg-[#FED100]" title="Jamaican Gold" />
      <div className="flex-[1.5] bg-[#111111]" title="Black" />
      {/* British Supporting Colors (40% weight) */}
      <div className="flex-[2] bg-[#C8102E]" title="British Red" />
      <div className="flex-[1] bg-[#FFFFFF]" title="White" />
      <div className="flex-[2] bg-[#012169]" title="British Royal Blue" />
    </div>
  );
};

export const CulturalMotifBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs text-zinc-300 font-medium ${compact ? 'text-[11px] px-2.5 py-0.5' : ''}`}>
      {/* Jamaican Flag representation */}
      <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
        <span className="relative inline-flex items-center justify-center w-5 h-3.5 rounded-[2px] overflow-hidden bg-[#FED100] shadow-sm">
          {/* Saltire geometry */}
          <span className="absolute inset-0 bg-[#009B3A] clip-flag-top" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }} />
          <span className="absolute inset-0 bg-[#009B3A] clip-flag-bottom" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }} />
          <span className="absolute inset-0 bg-[#111111] clip-flag-left" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }} />
          <span className="absolute inset-0 bg-[#111111] clip-flag-right" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }} />
        </span>
        <span>Jamaica</span>
      </span>

      <span className="text-zinc-500 font-normal">×</span>

      {/* UK Flag representation */}
      <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
        <span className="relative inline-flex items-center justify-center w-5 h-3.5 rounded-[2px] overflow-hidden bg-[#012169] shadow-sm">
          {/* White cross */}
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-white" />
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1.5 bg-white" />
          {/* Red cross */}
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#C8102E]" />
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#C8102E]" />
        </span>
        <span>United Kingdom</span>
      </span>

      <span className="hidden sm:inline text-zinc-400">·</span>
      <span className="hidden sm:inline text-[#FED100]">Roots & Soundsystem</span>
    </div>
  );
};
