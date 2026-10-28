export interface VideoTrack {
  id: string;
  youtubeId: string;
  title: string;
  category: 'feature' | 'live' | 'release';
  categoryLabel: string;
  description: string;
  url: string;
}

export interface LightingMode {
  id: 'full' | 'mellow' | 'off';
  label: string;
}
