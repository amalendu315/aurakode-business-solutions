export type SceneId = "origin" | "identity" | "systems" | "visibility" | "growth" | "siliguri" | "brand" | "manifesto";
export type MotionScene = { id: SceneId; copy: string; start: number; end: number; label: string };

export const REEL_DURATION = 16.5;
export const REEL_PLAYBACK_RATE = 0.78;

export const motionScenes: readonly MotionScene[] = [
  { id: "origin", copy: "Every business starts with an idea.", start: 0, end: 1.8, label: "The idea" },
  { id: "identity", copy: "An idea that becomes an identity.", start: 1.5, end: 3.4, label: "Identity" },
  { id: "systems", copy: "Through one system, we make it work.", start: 3.1, end: 5.4, label: "One system" },
  { id: "visibility", copy: "We make it seen.", start: 5.1, end: 7.0, label: "Visibility" },
  { id: "growth", copy: "We make it grow.", start: 6.7, end: 8.7, label: "Growth" },
  { id: "siliguri", copy: "Right here in Siliguri.", start: 8.4, end: 10.8, label: "Siliguri HQ" },
  { id: "brand", copy: "AuraKode Business Solutions.", start: 10.5, end: 12.6, label: "AuraKode" },
  { id: "manifesto", copy: "We don't just build brands. We build what makes them work.", start: 12.3, end: REEL_DURATION, label: "Our belief" },
] as const;
