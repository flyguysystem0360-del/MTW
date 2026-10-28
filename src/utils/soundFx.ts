/**
 * Web Audio API synthesized Reggae Sound System Dub Siren / Horn.
 * Completely client-side, zero external files, authentic sound system feel!
 */
let audioCtx: AudioContext | null = null;

export function playDubSiren(type: 'siren' | 'laser' = 'siren') {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Create primary oscillator
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    // Create delay/echo effect for authentic dub space
    const delay = audioCtx.createDelay();
    delay.delayTime.value = 0.18;
    const feedback = audioCtx.createGain();
    feedback.gain.value = 0.45;

    // Master filter to warm the reggae tone
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2400;

    // Connect delay loop
    delay.connect(feedback);
    feedback.connect(delay);

    if (type === 'siren') {
      // Classic Dub Siren pitch sweep (up and down)
      osc.type = 'square';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.35);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.55);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.85);

      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      osc.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(audioCtx.destination);
      filter.connect(delay);
      delay.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } else {
      // Reggae Laser Drop / Rewind drop
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.4);

      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(audioCtx.destination);
      filter.connect(delay);
      delay.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.55);
    }
  } catch {
    // Graceful fallback if audio is not allowed by browser policy
  }
}
