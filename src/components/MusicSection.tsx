import React, { useState } from 'react';
import { Play, ExternalLink, Music2, Disc, Radio, AlertCircle } from 'lucide-react';
import { HeritageBar } from './HeritageBar';
import type { VideoTrack } from '../types';

export const MusicSection: React.FC = () => {
  const tracks: VideoTrack[] = [
    {
      id: 'track-1',
      youtubeId: '_f-8At8eCi0',
      title: 'Misa West — Official Video',
      category: 'feature',
      categoryLabel: 'Featured Release',
      description: 'Official music video release showcasing Misa West’s signature vocal delivery and conscious roots reggae message.',
      url: 'https://youtu.be/_f-8At8eCi0?si=7vxNFXCE8VU2Ahwl',
    },
    {
      id: 'track-2',
      youtubeId: 'PT8ukSbmuuQ',
      title: 'Misa West — Live Studio Session',
      category: 'live',
      categoryLabel: 'Live Performance',
      description: 'Dynamic live performance featuring organic reggae basslines, live instrumentation, and soulful roots harmonies.',
      url: 'https://youtu.be/PT8ukSbmuuQ?si=H7X0M8JHUv0xa5tz',
    },
    {
      id: 'track-3',
      youtubeId: 'NobIhBZJPSQ',
      title: 'Misa West — Acoustic & Vocal Session',
      category: 'release',
      categoryLabel: 'Acoustic / Session',
      description: 'Intimate acoustic and vocal presentation highlighting Misa West’s vocal range and storytelling.',
      url: 'https://youtu.be/NobIhBZJPSQ?si=68z-9U5Y_xcOuMJi',
    },
  ];

  const [activeTrack, setActiveTrack] = useState<VideoTrack>(tracks[0]);
  const [filter, setFilter] = useState<'all' | 'feature' | 'live' | 'release'>('all');
  const [hasEmbedError, setHasEmbedError] = useState(false);

  const filteredTracks = filter === 'all'
    ? tracks
    : tracks.filter((t) => t.category === filter);

  return (
    <section id="music" className="relative py-16 md:py-24 bg-[#0a0b0d] overflow-hidden">
      {/* Background concert lighting overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#009B3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FED100]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#009B3A]">
              <Disc className="w-3.5 h-3.5" />
              <span>DISCOGRAPHY &amp; LIVE SESSIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline tracking-tight text-white uppercase">
              MUSIC &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FED100] to-[#009B3A]">PERFORMANCES</span>
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Experience Misa West’s live vocal energy, official releases, and studio sessions ahead of Sunday, December 20, 2026.
            </p>
          </div>

          {/* Functional Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#FED100] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Videos ({tracks.length})
            </button>
            <button
              onClick={() => setFilter('feature')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'feature'
                  ? 'bg-[#FED100] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'live'
                  ? 'bg-[#FED100] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Live Performance
            </button>
            <button
              onClick={() => setFilter('release')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'release'
                  ? 'bg-[#FED100] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sessions
            </button>
          </div>
        </div>

        {/* Main Stage Video Player Card */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden mb-8">
          <HeritageBar height="h-1.5" />

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Primary Video Embed (8 Cols) */}
              <div className="lg:col-span-8">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group">
                  <iframe
                    key={activeTrack.youtubeId}
                    src={`https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?rel=0&modestbranding=1`}
                    title={activeTrack.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onError={() => setHasEmbedError(true)}
                    className="w-full h-full border-0"
                  />

                  {hasEmbedError && (
                    <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center">
                      <AlertCircle className="w-8 h-8 text-[#FED100] mb-2" />
                      <p className="text-sm text-zinc-300 mb-3">
                        If embed is restricted by your browser, watch directly on YouTube.
                      </p>
                      <a
                        href={activeTrack.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-[#FED100] text-black font-bold text-xs uppercase"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Active Track Metadata & Quick Info (4 Cols) */}
              <div className="lg:col-span-4 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#009B3A]/20 text-[#009B3A] text-xs font-bold uppercase tracking-wider">
                  <Radio className="w-3 h-3" />
                  <span>{activeTrack.categoryLabel}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-headline tracking-wide text-white uppercase">
                  {activeTrack.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {activeTrack.description}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={activeTrack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>OPEN ON YOUTUBE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FED100]" />
                  </a>

                  <div className="text-[11px] text-zinc-500 font-mono">
                    YouTube ID: {activeTrack.youtubeId}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredTracks.map((track) => {
            const isCurrent = activeTrack.id === track.id;
            return (
              <div
                key={track.id}
                onClick={() => setActiveTrack(track)}
                className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 text-left border relative overflow-hidden ${
                  isCurrent
                    ? 'bg-zinc-900 border-[#FED100] shadow-[0_0_20px_rgba(254,209,0,0.2)]'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/30 hover:bg-zinc-900/60'
                }`}
              >
                {/* Active Indicator Top Edge */}
                {isCurrent && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#009B3A] via-[#FED100] to-[#C8102E]" />
                )}

                {/* Thumbnail / Video Preview Tile */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-3">
                  <img
                    src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
                    alt={track.title}
                    onError={(e) => {
                      // Fallback image if youtube thumbnail fails
                      (e.target as HTMLImageElement).src = '/assets/aistudio/YttRJy_H7K2ab7YJN_b1fd5244.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className={`p-3 rounded-full transition-transform ${isCurrent ? 'bg-[#FED100] text-black scale-110 shadow-lg' : 'bg-black/70 text-white group-hover:scale-110'}`}>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-zinc-300 backdrop-blur-sm">
                    {track.categoryLabel}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-headline uppercase tracking-wide text-white group-hover:text-[#FED100] transition-colors">
                      {track.title}
                    </h4>
                    {isCurrent && (
                      <span className="text-[10px] font-bold text-[#009B3A] uppercase font-mono">
                        PLAYING
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
