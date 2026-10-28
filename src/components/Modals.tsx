import React, { useState } from 'react';
import {
  X,
  HeartHandshake,
  QrCode,
  Copy,
  Check,
  ArrowUpRight,
  Share2,
  Calendar,
  CalendarPlus,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { downloadCalendarInvite, getGoogleCalendarUrl } from '../utils/calendar';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const donationUrl = 'https://gofund.me/297ce37b2';

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(donationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FED100]/20 text-[#FED100] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>OFFICIAL FUNDRAISING CAMPAIGN</span>
          </div>
          <h3 className="text-3xl font-headline tracking-wide text-white uppercase">
            MISA WEST LIVE IN CONCERT
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Fundraising Target: <strong className="text-[#FED100] font-bold">£1,600</strong>. Every contribution helps make this cultural roots reggae concert a reality.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center">
          <div className="p-3 bg-white rounded-2xl shadow-xl max-w-xs border-4 border-[#FED100]">
            <img
              src="/assets/aistudio/QR_Code_7996fe3f.png"
              alt="GoFundMe Scan to Donate QR Code"
              className="w-56 h-56 object-contain"
            />
          </div>
          <span className="text-[11px] text-zinc-400 mt-2">
            Scan with smartphone camera to donate immediately
          </span>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FED100] to-[#009B3A] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>CONTINUE TO GOFUNDME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#009B3A]" />
                  <span>LINK COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>COPY DONATION LINK</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 text-xs font-medium transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const shareText = 'Misa West Live in Concert — Reggae Fundraiser at The Dingle, B45 0BP on Sunday, Dec 20, 2026. Join us!';

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const shareWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-md rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close share dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex p-2 rounded-full bg-[#FED100]/20 text-[#FED100] mb-1">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-headline tracking-wide text-white uppercase">
            SPREAD THE WORD
          </h3>
          <p className="text-xs text-zinc-400">
            Share the Misa West Live in Concert fundraiser with friends, family, and reggae lovers.
          </p>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <a
            href={shareWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] flex flex-col items-center gap-1 text-xs font-semibold transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={shareTwitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-400 flex flex-col items-center gap-1 text-xs font-semibold transition-all"
          >
            <span className="font-bold text-base leading-5">𝕏</span>
            <span>Twitter/X</span>
          </a>

          <a
            href={shareFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/40 text-blue-400 flex flex-col items-center gap-1 text-xs font-semibold transition-all"
          >
            <span className="font-bold text-base leading-5">f</span>
            <span>Facebook</span>
          </a>
        </div>

        {/* Copy Link Field */}
        <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-between gap-2">
          <span className="text-xs text-zinc-400 truncate text-left pl-2">
            {shareUrl}
          </span>
          <button
            onClick={handleCopy}
            className="py-1.5 px-3 rounded-lg bg-[#FED100] text-black text-xs font-bold uppercase transition-all shrink-0 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
