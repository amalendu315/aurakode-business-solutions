export type SceneId =
  | "origin"
  | "identity"
  | "systems"
  | "visibility"
  | "growth"
  | "siliguri"
  | "brand"
  | "manifesto";
export type MotionScene = {
  id: SceneId;
  copy: string;
  start: number;
  end: number;
  label: string;
};

export const REEL_DURATION = 16.5;
export const VOICEOVER_DURATION = 30.36;
// Starts of spoken phrases, measured from the pauses in the supplied recording.
const AUDIO_BEAT_STARTS = [
  0,
  3.07,
  6.21,
  9.39,
  11.01,
  12.4,
  14.21,
  17.02,
  VOICEOVER_DURATION,
] as const;
const VISUAL_BEAT_STARTS = [
  0,
  1.5,
  3.1,
  5.1,
  6.7,
  8.4,
  10.5,
  12.3,
  REEL_DURATION,
] as const;

export function visualTimeForAudio(audioTime: number) {
  const time = Math.max(0, Math.min(VOICEOVER_DURATION, audioTime));
  for (let i = 0; i < AUDIO_BEAT_STARTS.length - 1; i++) {
    if (time <= AUDIO_BEAT_STARTS[i + 1]) {
      const fraction =
        (time - AUDIO_BEAT_STARTS[i]) /
        (AUDIO_BEAT_STARTS[i + 1] - AUDIO_BEAT_STARTS[i]);
      return (
        VISUAL_BEAT_STARTS[i] +
        fraction * (VISUAL_BEAT_STARTS[i + 1] - VISUAL_BEAT_STARTS[i])
      );
    }
  }
  return REEL_DURATION;
}

export const motionScenes: readonly MotionScene[] = [
  {
    id: "origin",
    copy: "Every business starts with an idea.",
    start: 0,
    end: 1.8,
    label: "The idea",
  },
  {
    id: "identity",
    copy: "An idea that becomes an identity.",
    start: 1.5,
    end: 3.4,
    label: "Identity",
  },
  {
    id: "systems",
    copy: "Through one system, we make it work.",
    start: 3.1,
    end: 5.4,
    label: "One system",
  },
  {
    id: "visibility",
    copy: "We make it seen.",
    start: 5.1,
    end: 7.0,
    label: "Visibility",
  },
  {
    id: "growth",
    copy: "We make it grow.",
    start: 6.7,
    end: 8.7,
    label: "Growth",
  },
  {
    id: "siliguri",
    copy: "Right here in Siliguri.",
    start: 8.4,
    end: 10.8,
    label: "Siliguri HQ",
  },
  {
    id: "brand",
    copy: "AuraKode Business Solutions.",
    start: 10.5,
    end: 12.6,
    label: "AuraKode",
  },
  {
    id: "manifesto",
    copy: "We don't just build brands. We build what makes them work.",
    start: 12.3,
    end: REEL_DURATION,
    label: "Our belief",
  },
] as const;
