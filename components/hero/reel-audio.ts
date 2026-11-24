export type ReelAudio = {
  pause: () => Promise<void>;
  resume: () => Promise<void>;
  stop: () => Promise<void>;
  sync: (timeSeconds: number, force?: boolean) => void;
};

/** Keeps the supplied voiceover in front of a very quiet, self-contained ambient tune. */
export async function createReelAudio(
  voice: HTMLAudioElement,
  startAt: number,
): Promise<ReelAudio> {
  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.028;
  master.connect(context.destination);
  const melody = [220, 261.63, 329.63, 392, 329.63, 293.66, 261.63, 196];
  const chords = [
    [110, 164.81, 220],
    [98, 146.83, 196],
    [130.81, 196, 261.63],
    [110, 164.81, 220],
  ];
  let step = 0;
  let timer: number | null = null;
  let stopped = false;

  const note = (
    frequency: number,
    start: number,
    duration: number,
    level: number,
  ) => {
    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, start);
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(level, start + 0.08);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  };
  const pulse = () => {
    if (stopped || context.state !== "running") return;
    const now = context.currentTime + 0.02;
    note(melody[step % melody.length], now, 1.45, 0.14);
    if (step % 4 === 0)
      chords[Math.floor(step / 4) % chords.length].forEach((frequency) =>
        note(frequency, now, 3.5, 0.04),
      );
    step += 1;
  };
  const schedule = () => {
    if (timer !== null) return;
    pulse();
    timer = window.setInterval(pulse, 820);
  };
  const sync = (timeSeconds: number, force = false) => {
    if (stopped) return;
    const duration = Number.isFinite(voice.duration) ? voice.duration : 30.36;
    const target = Math.max(0, Math.min(duration - 0.04, timeSeconds));
    if (force || Math.abs(voice.currentTime - target) > 0.3)
      voice.currentTime = target;
  };

  voice.loop = true;
  voice.volume = 1;
  sync(startAt, true);
  // Start both from the visitor's click; browsers block unprompted audio playback.
  const voicePlay = voice.play();
  const contextPlay = context.resume();
  try {
    await Promise.all([voicePlay, contextPlay]);
  } catch (error) {
    voice.pause();
    await context.close();
    throw error;
  }
  schedule();
  return {
    pause: async () => {
      voice.pause();
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      if (context.state === "running") await context.suspend();
    },
    resume: async () => {
      if (stopped) return;
      await Promise.all([voice.play(), context.resume()]);
      schedule();
    },
    stop: async () => {
      stopped = true;
      voice.pause();
      voice.currentTime = 0;
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      if (context.state !== "closed") await context.close();
    },
    sync,
  };
}
