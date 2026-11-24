"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";
import {
  motionScenes,
  REEL_DURATION,
  VOICEOVER_DURATION,
  visualTimeForAudio,
} from "./motion-scenes";
import { SceneGraphic } from "./scene-graphics";
import { createReelAudio, type ReelAudio } from "./reel-audio";
import { whatsappUrl } from "@/lib/whatsapp";

const headlines = [
  [
    <>Every business starts</>,
    <>
      with an <em>idea.</em>
    </>,
  ],
  [
    <>An idea that becomes</>,
    <>
      an <em>identity.</em>
    </>,
  ],
  [
    <>Through one system,</>,
    <>
      we make it <em>work.</em>
    </>,
  ],
  [
    <>
      We make it <em>seen.</em>
    </>,
  ],
  [
    <>
      We make it <em>grow.</em>
    </>,
  ],
  [
    <>
      Right here in <em>Siliguri.</em>
    </>,
  ],
  [
    <>
      AuraKode Business <em>Solutions.</em>
    </>,
  ],
  [
    <>We don&apos;t just build brands.</>,
    <>
      We build <em>what makes them work.</em>
    </>,
  ],
] as const;

const logoStrokes = [
  [
    [-78, 52],
    [-42, -50],
  ],
  [
    [-42, -50],
    [-6, 52],
  ],
  [
    [-64, 9],
    [-20, 9],
  ],
  [
    [14, -49],
    [14, 52],
  ],
  [
    [14, 8],
    [73, -49],
  ],
  [
    [14, 8],
    [76, 52],
  ],
] as const;
function logoParticlePosition(index: number) {
  const [start, end] = logoStrokes[Math.floor(index / 12)];
  const progress = (index % 12) / 11;
  return {
    x: start[0] + (end[0] - start[0]) * progress,
    y: start[1] + (end[1] - start[1]) * progress,
  };
}

export function HeroMotionStage() {
  const rootRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const playbackTimeRef = useRef(0);
  const currentRef = useRef(0);
  const audioRef = useRef<ReelAudio | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(
    () => () => {
      void audioRef.current?.stop();
      audioRef.current = null;
    },
    [],
  );
  useEffect(() => {
    const voice = new Audio("/audio/aurakode-hero-voiceover.mp3");
    voice.preload = "auto";
    voice.loop = true;
    voice.load();
    voiceRef.current = voice;
    return () => {
      voice.pause();
      voiceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(".reel-scene");
      gsap.set(scenes, { autoAlpha: 0, transformOrigin: "50% 50%" });
      gsap.set(scenes[0], { autoAlpha: 1 });
      gsap.set(".reel-title-line", {
        yPercent: 115,
        rotationX: -20,
        opacity: 0,
        transformOrigin: "50% 100%",
      });
      gsap.set(".reel-art", { opacity: 0, scale: 0.9 });
      gsap.set(".reel-status-live, .reel-sync-toast", { opacity: 0, y: 12 });
      gsap.set(".reel-chart-line", {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      });
      gsap.set(".reel-chart-area, .reel-chart-dot", { opacity: 0 });
      gsap.set(".reel-network-pulse, .reel-system-pulse", {
        strokeDasharray: "8 22",
        strokeDashoffset: 100,
      });
      const tl = gsap.timeline({
        repeat: -1,
        paused: true,
        defaults: { ease: "power4.out" },
        onUpdate: () => {
          let next = 0;
          for (let i = motionScenes.length - 1; i >= 0; i--)
            if (tl.time() >= motionScenes[i].start) {
              next = i;
              break;
            }
          if (next !== currentRef.current) {
            currentRef.current = next;
            setActiveIndex(next);
          }
          scenes.forEach((scene, i) =>
            scene.setAttribute("aria-hidden", i === next ? "false" : "true"),
          );
        },
      });
      timelineRef.current = tl;
      motionScenes.forEach((beat, index) => {
        const scene = scenes[index];
        tl.addLabel(beat.id, beat.start);
        if (index > 0) {
          if (index < 3) {
            tl.fromTo(
              scene,
              { autoAlpha: 0, scale: 0.94 },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.55,
                ease: "power2.out",
                immediateRender: false,
              },
              beat.start,
            );
            tl.to(
              scenes[index - 1],
              {
                autoAlpha: 0,
                scale: 1.06,
                duration: 0.55,
                ease: "power2.inOut",
              },
              beat.start,
            );
          } else {
            tl.fromTo(
              scene,
              { autoAlpha: 0, x: 100, z: -120, scale: 0.82, rotationY: -9 },
              {
                autoAlpha: 1,
                x: 0,
                z: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.58,
                ease: "expo.inOut",
                immediateRender: false,
              },
              beat.start,
            );
            tl.to(
              scenes[index - 1],
              {
                autoAlpha: 0,
                x: -110,
                z: 150,
                scale: 1.16,
                rotationY: 9,
                duration: 0.58,
                ease: "expo.inOut",
              },
              beat.start,
            );
            tl.fromTo(
              ".reel-cut",
              { opacity: 0, scaleX: 0.08 },
              {
                opacity: 0.8,
                scaleX: 1,
                duration: 0.16,
                ease: "power2.out",
                immediateRender: false,
              },
              beat.start,
            ).to(
              ".reel-cut",
              { opacity: 0, duration: 0.32, ease: "power2.out" },
              beat.start + 0.16,
            );
          }
        }
        const lines = scene.querySelectorAll(".reel-title-line");
        if (index === 7) {
          tl.to(
            lines[0],
            {
              yPercent: 0,
              rotationX: 0,
              opacity: 1,
              duration: 0.32,
              ease: "power4.out",
            },
            beat.start + 0.05,
          );
          tl.to(
            lines[1],
            {
              yPercent: 0,
              rotationX: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power4.out",
            },
            beat.start + 0.62,
          );
        } else
          tl.to(
            lines,
            {
              yPercent: 0,
              rotationX: 0,
              opacity: 1,
              duration: 0.54,
              ease: "power4.out",
              stagger: 0.06,
            },
            beat.start + 0.08,
          );
        tl.to(
          scene.querySelector(".reel-art"),
          { opacity: 1, scale: 1, duration: 0.56, ease: "expo.inOut" },
          beat.start + 0.03,
        );
        if (index < motionScenes.length - 1)
          tl.to(
            lines,
            {
              yPercent: -95,
              opacity: 0,
              duration: 0.3,
              ease: "power3.in",
              stagger: 0.02,
            },
            beat.end - 0.34,
          );
      });
      // One master sequence: every visual event shares the headline timeline.
      tl.fromTo(
        ".reel-bulb-outline, .reel-bulb-stem",
        { opacity: 0 },
        { opacity: 0.55, duration: 0.3 },
        0.02,
      )
        .fromTo(
          ".reel-bulb-filament",
          { opacity: 0, filter: "drop-shadow(0 0 0px #22d3ee)" },
          { opacity: 1, filter: "drop-shadow(0 0 7px #8ef7ff)", duration: 0.2 },
          0.42,
        )
        .fromTo(
          ".reel-bulb-core",
          { scale: 0.05, opacity: 0, transformOrigin: "50% 50%" },
          { scale: 1, opacity: 1, duration: 0.3 },
          0.47,
        )
        .fromTo(
          ".reel-bulb-ambient, .reel-bulb-halo",
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.65, ease: "power2.in" },
          0.61,
        )
        .to(
          ".reel-bulb-filament, .reel-bulb-core",
          {
            filter: "drop-shadow(0 0 30px #e1ffff)",
            duration: 0.45,
            ease: "power2.in",
          },
          0.83,
        )
        .fromTo(
          ".reel-bulb-flare",
          { scale: 0.1, opacity: 0 },
          { scale: 2.5, opacity: 1, duration: 0.32, ease: "power4.in" },
          1.16,
        )
        .fromTo(
          ".reel-bulb-burst i",
          { x: 0, y: 0, scale: 0.2, opacity: 0 },
          {
            x: (i: number) => Math.cos((i * Math.PI) / 9) * 160,
            y: (i: number) => Math.sin((i * Math.PI) / 9) * 130,
            scale: 1,
            opacity: 1,
            duration: 0.48,
            ease: "expo.out",
          },
          1.32,
        )
        .to(".reel-bulb", { scale: 1.2, opacity: 0, duration: 0.24 }, 1.37)
        .to(
          ".reel-bulb-halo, .reel-bulb-ambient",
          { scale: 1.8, opacity: 0, duration: 0.38 },
          1.36,
        )
        .fromTo(
          ".reel-identity-particle",
          { x: 0, y: 0, scale: 0.1, opacity: 0 },
          {
            x: (i: number) => Math.cos(i * 2.39996) * (80 + (i % 9) * 13),
            y: (i: number) => Math.sin(i * 2.39996) * (48 + (i % 9) * 10),
            scale: 1,
            opacity: 1,
            duration: 0.62,
            stagger: 0.002,
            ease: "expo.out",
          },
          1.56,
        )
        .to(
          ".reel-identity-particle",
          {
            x: (i: number) => logoParticlePosition(i).x,
            y: (i: number) => logoParticlePosition(i).y,
            duration: 0.5,
            ease: "power3.inOut",
          },
          2.13,
        )
        .fromTo(
          ".reel-identity-mark",
          { scale: 0.75, opacity: 0, filter: "blur(14px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.38,
            ease: "power3.out",
          },
          2.56,
        )
        .to(".reel-identity-particle", { opacity: 0, duration: 0.23 }, 2.63)
        .to(
          ".reel-identity-art",
          { scale: 0.82, opacity: 0, duration: 0.38, ease: "expo.inOut" },
          3.06,
        )
        .fromTo(
          ".reel-ecosystem-core",
          { scale: 0.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.38, ease: "back.out(1.5)" },
          3.16,
        )
        .fromTo(
          ".reel-ecosystem svg path",
          { strokeDasharray: 800, strokeDashoffset: 800 },
          { strokeDashoffset: 0, duration: 0.58, ease: "power2.out" },
          3.35,
        )
        .fromTo(
          ".reel-ecosystem-module",
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.34,
            stagger: 0.06,
            ease: "back.out(1.3)",
          },
          3.48,
        )
        .to(
          ".reel-ecosystem",
          { scale: 0.75, opacity: 0, duration: 0.34, ease: "expo.inOut" },
          4.05,
        )
        .fromTo(
          ".reel-desktop-device",
          { y: 90, rotationX: 18, opacity: 0 },
          { y: 0, rotationX: 12, rotationY: -8, opacity: 1, duration: 0.55 },
          4.1,
        )
        .fromTo(
          ".reel-tablet-device",
          { x: -130, rotationY: -18, opacity: 0 },
          { x: 0, rotationY: 10, opacity: 1, duration: 0.55 },
          4.18,
        )
        .fromTo(
          ".reel-phone-device",
          { x: 140, rotationY: 20, opacity: 0 },
          { x: 0, rotationY: -10, opacity: 1, duration: 0.55 },
          4.24,
        )
        .to(
          ".reel-system-pulse",
          { strokeDashoffset: 0, duration: 0.65, ease: "power4.out" },
          4.35,
        )
        .to(
          ".reel-status-pending",
          { opacity: 0, duration: 0.12, stagger: 0.06 },
          4.65,
        )
        .to(
          ".reel-status-live",
          { opacity: 1, y: 0, duration: 0.18, stagger: 0.06 },
          4.65,
        )
        .to(
          ".reel-sync-toast",
          { opacity: 1, y: 0, duration: 0.32, ease: "back.out(1.2)" },
          4.72,
        )
        .to(
          ".reel-systems-art",
          { scale: 1.3, opacity: 0, duration: 0.4, ease: "expo.inOut" },
          5.08,
        )
        .fromTo(
          ".reel-search-panel",
          { y: 65, rotationX: 14, opacity: 0 },
          { y: 0, rotationX: 0, opacity: 1, duration: 0.49 },
          5.15,
        )
        .fromTo(
          ".reel-search-input span",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.42 },
          5.37,
        )
        .fromTo(
          ".reel-search-result",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          5.57,
        )
        .fromTo(
          ".reel-social-one",
          { x: -130, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.48 },
          5.72,
        )
        .fromTo(
          ".reel-social-two",
          { x: 130, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.48 },
          5.82,
        )
        .to(
          ".reel-visibility-art",
          {
            x: -140,
            scale: 0.78,
            opacity: 0,
            duration: 0.38,
            ease: "expo.inOut",
          },
          6.67,
        )
        .fromTo(
          ".reel-growth-panel",
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.47 },
          6.73,
        )
        .to(".reel-chart-line", { strokeDashoffset: 0, duration: 1.15 }, 6.85)
        .to(".reel-chart-area", { opacity: 1, duration: 0.7 }, 7.0)
        .to(".reel-chart-dot", { opacity: 1, duration: 0.15 }, 7.8)
        .fromTo(
          ".reel-growth-pill",
          { y: 45, scale: 0.85, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.11,
            ease: "back.out(1.2)",
          },
          7.1,
        )
        .to(
          ".reel-growth-art",
          { scaleY: 0.3, opacity: 0, duration: 0.4, ease: "expo.inOut" },
          8.35,
        )
        .fromTo(
          ".reel-hub-grid",
          { scale: 0.72, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.75 },
          8.46,
        )
        .fromTo(
          ".reel-hub-radar",
          { scale: 0.42, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.58 },
          8.54,
        )
        .to(
          ".reel-hub-sweep",
          { rotation: 250, duration: 2.1, ease: "none" },
          8.58,
        )
        .fromTo(
          ".reel-network-arc",
          { opacity: 0 },
          { opacity: 1, duration: 0.45, stagger: 0.07 },
          8.66,
        )
        .to(
          ".reel-network-pulse",
          { strokeDashoffset: 0, duration: 1.6, ease: "none", stagger: 0.07 },
          8.78,
        )
        .fromTo(
          ".reel-hub-node",
          { scale: 0.55, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.38, stagger: 0.07 },
          8.85,
        )
        .fromTo(
          ".reel-coordinate-hud",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          9.0,
        )
        .to(
          ".reel-hub-network",
          { scale: 0.2, opacity: 0, duration: 0.4, ease: "expo.inOut" },
          10.48,
        )
        .to(
          ".reel-siliguri-art",
          { scale: 1.13, opacity: 0, duration: 0.42, ease: "expo.inOut" },
          10.5,
        )
        .fromTo(
          ".reel-scene-brand .reel-wordmark",
          { scale: 0.45, rotationY: -20, opacity: 0 },
          {
            scale: 1,
            rotationY: 0,
            opacity: 1,
            duration: 0.63,
            ease: "back.out(1.2)",
          },
          10.58,
        )
        .fromTo(
          ".reel-scene-brand .reel-wordmark-sheen",
          { x: -250, opacity: 0 },
          { x: 310, opacity: 0.75, duration: 0.7, ease: "expo.inOut" },
          11.0,
        )
        .fromTo(
          ".reel-lockup-meta",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.42 },
          10.95,
        )
        .to(
          ".reel-scene-brand .reel-wordmark",
          {
            y: -48,
            scale: 0.78,
            opacity: 0,
            duration: 0.4,
            ease: "expo.inOut",
          },
          12.28,
        )
        .fromTo(
          ".reel-scene-manifesto .reel-wordmark",
          { y: 48, scale: 1, opacity: 0 },
          {
            y: -48,
            scale: 0.78,
            opacity: 1,
            duration: 0.56,
            ease: "expo.inOut",
          },
          12.32,
        )
        .fromTo(
          ".reel-final-actions",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          13.25,
        )
        .to(
          scenes[7],
          { autoAlpha: 0, scale: 1.08, duration: 0.35, ease: "expo.inOut" },
          16.15,
        )
        .to({}, { duration: 0.001 }, REEL_DURATION - 0.001);
      if (reduced) {
        tl.time(13.85).pause();
        currentRef.current = 7;
        setActiveIndex(7);
        void audioRef.current?.pause();
      } else tl.time(0).pause();
    }, root);
    const tick = (_time: number, deltaTime: number) => {
      if (reduced || !timelineRef.current) return;
      if (audioRef.current && voiceRef.current && !voiceRef.current.paused) {
        playbackTimeRef.current = voiceRef.current.currentTime;
      } else {
        playbackTimeRef.current =
          (playbackTimeRef.current + deltaTime / 1000) % VOICEOVER_DURATION;
      }
      timelineRef.current.time(visualTimeForAudio(playbackTimeRef.current));
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      timelineRef.current = null;
      context.revert();
    };
  }, [reduced]);

  const toggleMusic = async () => {
    if (audioRef.current) {
      await audioRef.current.stop();
      audioRef.current = null;
      setMusicEnabled(false);
      return;
    }
    const voice = voiceRef.current,
      timeline = timelineRef.current;
    if (!voice || !timeline) return;
    playbackTimeRef.current = 0;
    if (!reduced) timeline.time(0);
    try {
      const audio = await createReelAudio(voice, 0);
      audioRef.current = audio;
      setMusicEnabled(true);
    } catch {
      setMusicEnabled(false);
    }
  };
  const skip = () => {
    void audioRef.current?.stop();
    audioRef.current = null;
    setMusicEnabled(false);
  };

  return (
    <section
      id="top"
      ref={rootRef}
      className="reel-hero"
      data-active-scene={motionScenes[activeIndex].id}
      aria-label="AuraKode agency reel"
    >
      <div className="reel-studio-light" />
      <div className="reel-depth-field" />
      <div className="reel-film-grain" />
      <div className="reel-vignette" />
      <div className="reel-cut" />
      <div className="reel-frame reel-frame-left" />
      <div className="reel-frame reel-frame-right" />
      <div className="reel-topline">
        <span>
          <i /> SILIGURI, WEST BENGAL
        </span>
        <span>IDENTITY &nbsp; / &nbsp; SYSTEMS &nbsp; / &nbsp; GROWTH</span>
      </div>
      <div className="reel-stage" aria-live="off">
        {motionScenes.map((scene, index) => (
          <div
            className={`reel-scene reel-scene-${scene.id}`}
            data-scene={scene.id}
            key={scene.id}
            aria-hidden={index !== activeIndex}
          >
            <div className="reel-scene-inner">
              <div className="reel-art-shell">
                <SceneGraphic id={scene.id} />
              </div>
              <div className="reel-copy">
                <span className="reel-kicker">
                  AURAKODE / {String(index + 1).padStart(2, "0")}
                </span>
                <h1 aria-label={scene.copy}>
                  {headlines[index].map((line, lineIndex) => (
                    <span className="reel-title-mask" key={lineIndex}>
                      <span className="reel-title-line">{line}</span>
                    </span>
                  ))}
                </h1>
                {index === 7 && (
                  <div className="reel-final-actions">
                    <a
                      href={whatsappUrl(
                        "Hi AuraKode, I'd like to start a project.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reel-primary-cta"
                    >
                      Start Your System <span aria-hidden="true">→</span>
                    </a>
                    <a href="#work" className="reel-secondary-cta">
                      View Our Work
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="reel-player">
        <button
          className="reel-sound-button"
          type="button"
          onClick={() => {
            void toggleMusic();
          }}
          aria-label={
            musicEnabled
              ? "Turn voiceover and music off"
              : "Play voiceover and music"
          }
          aria-pressed={musicEnabled}
          title={
            musicEnabled ? "Voiceover and music on" : "Play voiceover and music"
          }
        >
          {musicEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span className="reel-sound-copy">
            {musicEnabled ? "Sound on" : "Sound off"}
          </span>
        </button>
        <a href="#systems" onClick={skip}>
          Skip to Site <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
