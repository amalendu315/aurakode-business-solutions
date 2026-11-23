"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { gsap } from "gsap";
import { ArrowDown, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { motionScenes, REEL_DURATION, REEL_PLAYBACK_RATE } from "./motion-scenes";
import { SceneGraphic } from "./scene-graphics";
import { createReelAudio, type ReelAudio } from "./reel-audio";

const headlines = [
  [<>Every business starts</>, <>with an <em>idea.</em></>],
  [<>An idea that becomes</>, <>an <em>identity.</em></>],
  [<>Through one system,</>, <>we make it <em>work.</em></>],
  [<>We make it <em>seen.</em></>],
  [<>We make it <em>grow.</em></>],
  [<>Right here in <em>Siliguri.</em></>],
  [<>AuraKode Business <em>Solutions.</em></>],
  [<>We don&apos;t just build brands.</>, <>We build <em>what makes them work.</em></>],
] as const;

export function HeroMotionStage() {
  const rootRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef(0);
  const audioRef = useRef<ReelAudio | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync(); media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => () => { void audioRef.current?.stop(); audioRef.current = null; }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(".reel-scene");
      gsap.set(scenes, { autoAlpha: 0, transformOrigin: "50% 50%" });
      gsap.set(scenes[0], { autoAlpha: 1 });
      gsap.set(".reel-title-line", { yPercent: 115, rotationX: -20, opacity: 0, transformOrigin: "50% 100%" });
      gsap.set(".reel-art", { opacity: 0, scale: .9 });
      gsap.set(".reel-status-live, .reel-sync-toast", { opacity: 0, y: 12 });
      gsap.set(".reel-chart-line", { strokeDasharray: 1000, strokeDashoffset: 1000 });
      gsap.set(".reel-chart-area, .reel-chart-dot", { opacity: 0 });
      gsap.set(".reel-network-pulse, .reel-system-pulse", { strokeDasharray: "8 22", strokeDashoffset: 100 });
      const tl = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: "power4.out" }, onUpdate: () => {
        const progress = tl.progress();
        if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
        if (rangeRef.current) rangeRef.current.value = String(Math.round(progress * 1000));
        let next = 0;
        for (let i = motionScenes.length - 1; i >= 0; i--) if (tl.time() >= motionScenes[i].start) { next = i; break; }
        if (next !== currentRef.current) { currentRef.current = next; setActiveIndex(next); }
        scenes.forEach((scene, i) => scene.setAttribute("aria-hidden", i === next ? "false" : "true"));
      }});
      tl.timeScale(REEL_PLAYBACK_RATE);
      timelineRef.current = tl;
      motionScenes.forEach((beat, index) => {
        const scene = scenes[index];
        tl.addLabel(beat.id, beat.start);
        if (index > 0) {
          tl.fromTo(scene, { autoAlpha: 0, x: 100, z: -120, scale: .82, rotationY: -9 }, { autoAlpha: 1, x: 0, z: 0, scale: 1, rotationY: 0, duration: .58, ease: "expo.inOut", immediateRender: false }, beat.start);
          tl.to(scenes[index - 1], { autoAlpha: 0, x: -110, z: 150, scale: 1.16, rotationY: 9, duration: .58, ease: "expo.inOut" }, beat.start);
          tl.fromTo(".reel-cut", { opacity: 0, scaleX: .08 }, { opacity: .8, scaleX: 1, duration: .16, ease: "power2.out", immediateRender: false }, beat.start)
            .to(".reel-cut", { opacity: 0, duration: .32, ease: "power2.out" }, beat.start + .16);
        }
        const lines = scene.querySelectorAll(".reel-title-line");
        if (index === 7) {
          tl.to(lines[0], { yPercent: 0, rotationX: 0, opacity: 1, duration: .32, ease: "power4.out" }, beat.start + .05);
          tl.to(lines[1], { yPercent: 0, rotationX: 0, opacity: 1, duration: .4, ease: "power4.out" }, beat.start + .62);
        } else tl.to(lines, { yPercent: 0, rotationX: 0, opacity: 1, duration: .54, ease: "power4.out", stagger: .06 }, beat.start + .08);
        tl.to(scene.querySelector(".reel-art"), { opacity: 1, scale: 1, duration: .56, ease: "expo.inOut" }, beat.start + .03);
        if (index < motionScenes.length - 1) tl.to(lines, { yPercent: -95, opacity: 0, duration: .3, ease: "power3.in", stagger: .02 }, beat.end - .34);
      });
      // One master sequence: every visual event shares the headline timeline.
      tl.fromTo(".reel-origin-prism", { scale: .18, rotationZ: -120, rotationY: -60, opacity: 0 }, { scale: 1, rotationZ: -28, rotationY: 0, opacity: 1, duration: 1.05, ease: "expo.out" }, .02)
        .fromTo(".reel-origin-orbit", { scale: .4, opacity: 0, rotation: -90 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.05, stagger: .12, ease: "expo.out" }, .1)
        .fromTo(".reel-spark", { y: -120, scale: .35, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .37 }, .04)
        .fromTo(".reel-shockwave", { scale: .1, opacity: .9 }, { scale: 2.25, opacity: 0, duration: .65, ease: "expo.inOut" }, .34)
        .fromTo(".reel-crosshair", { scale: .18, opacity: 0 }, { scale: 1, opacity: 1, duration: .64 }, .35)
        .fromTo(".reel-brand-card", { x: -180, z: -120, rotationY: -28, opacity: 0 }, { x: 0, z: 35, rotationY: -10, opacity: 1, duration: .7, ease: "back.out(1.2)" }, 1.55)
        .fromTo(".reel-type-card", { x: 180, z: -90, rotationY: 28, opacity: 0 }, { x: 0, z: 70, rotationY: 8, opacity: 1, duration: .7, ease: "back.out(1.2)" }, 1.67)
        .fromTo(".reel-palette-card", { y: 110, z: -70, rotationX: 18, opacity: 0 }, { y: 0, z: 95, rotationX: -5, opacity: 1, duration: .65, ease: "back.out(1.2)" }, 1.8)
        .to(".reel-identity-art", { scale: .82, opacity: 0, duration: .38, ease: "expo.inOut" }, 3.06)
        .fromTo(".reel-desktop-device", { y: 90, rotationX: 18, opacity: 0 }, { y: 0, rotationX: 12, rotationY: -8, opacity: 1, duration: .55 }, 3.14)
        .fromTo(".reel-tablet-device", { x: -130, rotationY: -18, opacity: 0 }, { x: 0, rotationY: 10, opacity: 1, duration: .55 }, 3.25)
        .fromTo(".reel-phone-device", { x: 140, rotationY: 20, opacity: 0 }, { x: 0, rotationY: -10, opacity: 1, duration: .55 }, 3.35)
        .to(".reel-system-pulse", { strokeDashoffset: 0, duration: 1.5, ease: "power4.out" }, 3.48)
        .to(".reel-status-pending", { opacity: 0, duration: .12, stagger: .06 }, 4.03)
        .to(".reel-status-live", { opacity: 1, y: 0, duration: .18, stagger: .06 }, 4.03)
        .to(".reel-sync-toast", { opacity: 1, y: 0, duration: .32, ease: "back.out(1.2)" }, 4.2)
        .to(".reel-systems-art", { scale: 1.3, opacity: 0, duration: .4, ease: "expo.inOut" }, 5.08)
        .fromTo(".reel-search-panel", { y: 65, rotationX: 14, opacity: 0 }, { y: 0, rotationX: 0, opacity: 1, duration: .49 }, 5.15)
        .fromTo(".reel-search-input span", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: .42 }, 5.37)
        .fromTo(".reel-search-result", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, 5.57)
        .fromTo(".reel-social-one", { x: -130, opacity: 0 }, { x: 0, opacity: 1, duration: .48 }, 5.72)
        .fromTo(".reel-social-two", { x: 130, opacity: 0 }, { x: 0, opacity: 1, duration: .48 }, 5.82)
        .to(".reel-visibility-art", { x: -140, scale: .78, opacity: 0, duration: .38, ease: "expo.inOut" }, 6.67)
        .fromTo(".reel-growth-panel", { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: .47 }, 6.73)
        .to(".reel-chart-line", { strokeDashoffset: 0, duration: 1.15 }, 6.85)
        .to(".reel-chart-area", { opacity: 1, duration: .7 }, 7.0)
        .to(".reel-chart-dot", { opacity: 1, duration: .15 }, 7.8)
        .fromTo(".reel-growth-pill", { y: 45, scale: .85, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .4, stagger: .11, ease: "back.out(1.2)" }, 7.1)
        .to(".reel-growth-art", { scaleY: .3, opacity: 0, duration: .4, ease: "expo.inOut" }, 8.35)
        .fromTo(".reel-hub-grid", { scale: .72, opacity: 0 }, { scale: 1, opacity: 1, duration: .75 }, 8.46)
        .fromTo(".reel-hub-radar", { scale: .42, opacity: 0 }, { scale: 1, opacity: 1, duration: .58 }, 8.54)
        .to(".reel-hub-sweep", { rotation: 250, duration: 2.1, ease: "none" }, 8.58)
        .fromTo(".reel-network-arc", { opacity: 0 }, { opacity: 1, duration: .45, stagger: .07 }, 8.66)
        .to(".reel-network-pulse", { strokeDashoffset: 0, duration: 1.6, ease: "none", stagger: .07 }, 8.78)
        .fromTo(".reel-hub-node", { scale: .55, opacity: 0 }, { scale: 1, opacity: 1, duration: .38, stagger: .07 }, 8.85)
        .fromTo(".reel-coordinate-hud", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .45 }, 9.0)
        .to(".reel-hub-network", { scale: .2, opacity: 0, duration: .4, ease: "expo.inOut" }, 10.48)
        .to(".reel-siliguri-art", { scale: 1.13, opacity: 0, duration: .42, ease: "expo.inOut" }, 10.5)
        .fromTo(".reel-scene-brand .reel-wordmark", { scale: .45, rotationY: -20, opacity: 0 }, { scale: 1, rotationY: 0, opacity: 1, duration: .63, ease: "back.out(1.2)" }, 10.58)
        .fromTo(".reel-scene-brand .reel-wordmark-sheen", { x: -250, opacity: 0 }, { x: 310, opacity: .75, duration: .7, ease: "expo.inOut" }, 11.0)
        .fromTo(".reel-lockup-meta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .42 }, 10.95)
        .to(".reel-scene-brand .reel-wordmark", { y: -48, scale: .78, opacity: 0, duration: .4, ease: "expo.inOut" }, 12.28)
        .fromTo(".reel-scene-manifesto .reel-wordmark", { y: 48, scale: 1, opacity: 0 }, { y: -48, scale: .78, opacity: 1, duration: .56, ease: "expo.inOut" }, 12.32)
        .fromTo(".reel-final-actions", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: .45 }, 13.25)
        .to(scenes[7], { autoAlpha: 0, scale: 1.08, duration: .35, ease: "expo.inOut" }, 16.15)
        .to({}, { duration: .001 }, REEL_DURATION - .001);
      if (reduced) { tl.time(13.85).pause(); currentRef.current = 7; setActiveIndex(7); setPlaying(false); void audioRef.current?.pause(); }
      else { tl.play(0); setPlaying(true); }
    }, root);
    return () => { timelineRef.current = null; context.revert(); };
  }, [reduced]);

  const seek = (progress: number) => timelineRef.current?.progress(Math.max(0, Math.min(1, progress))).pause();
  const onScrub = (event: React.ChangeEvent<HTMLInputElement>) => { seek(Number(event.currentTarget.value) / 1000); void audioRef.current?.pause(); setPlaying(false); };
  const onBarPointer = (event: PointerEvent<HTMLDivElement>) => { if (event.target instanceof HTMLElement && event.target.closest("button, input")) return; const rect = event.currentTarget.getBoundingClientRect(); seek((event.clientX - rect.left) / rect.width); void audioRef.current?.pause(); setPlaying(false); };
  const toggle = () => { const tl = timelineRef.current; if (!tl) return; if (tl.paused()) { tl.play(); void audioRef.current?.resume(); setPlaying(true); } else { tl.pause(); void audioRef.current?.pause(); setPlaying(false); } };
  const replay = () => { timelineRef.current?.restart(); void audioRef.current?.resume(); setPlaying(true); };
  const toggleMusic = async () => { if (audioRef.current) { await audioRef.current.stop(); audioRef.current = null; setMusicEnabled(false); return; } try { const audio = await createReelAudio(); audioRef.current = audio; if (!timelineRef.current || timelineRef.current.paused()) await audio.pause(); setMusicEnabled(true); } catch { setMusicEnabled(false); } };
  const skip = () => { void audioRef.current?.stop(); audioRef.current = null; setMusicEnabled(false); };

  return <section id="top" ref={rootRef} className="reel-hero" data-active-scene={motionScenes[activeIndex].id} aria-label="AuraKode agency reel">
    <div className="reel-studio-light"/><div className="reel-depth-field"/><div className="reel-film-grain"/><div className="reel-vignette"/><div className="reel-cut"/><div className="reel-frame reel-frame-left"/><div className="reel-frame reel-frame-right"/>
    <div className="reel-topline"><span><i/> SILIGURI, WEST BENGAL</span><span>IDENTITY &nbsp; / &nbsp; SYSTEMS &nbsp; / &nbsp; GROWTH</span></div>
    <div className="reel-stage" aria-live="off">{motionScenes.map((scene, index) => <div className={`reel-scene reel-scene-${scene.id}`} data-scene={scene.id} key={scene.id} aria-hidden={index!==activeIndex}><div className="reel-scene-inner"><div className="reel-art-shell"><SceneGraphic id={scene.id}/></div><div className="reel-copy"><span className="reel-kicker">AURAKODE / {String(index+1).padStart(2,"0")}</span><h1 aria-label={scene.copy}>{headlines[index].map((line,lineIndex)=><span className="reel-title-mask" key={lineIndex}><span className="reel-title-line">{line}</span></span>)}</h1>{index===7&&<div className="reel-final-actions"><a href="#contact" className="reel-primary-cta">Start Your System <span aria-hidden="true">→</span></a><a href="#work" className="reel-secondary-cta">View Our Work</a></div>}</div></div></div>)}</div>
    <div className="reel-player"><div className="reel-player-meta"><span>THE AURAKODE REEL</span><strong>{String(activeIndex+1).padStart(2,"0")} / 08 <i/> {motionScenes[activeIndex].label}</strong></div><div className="reel-progress-wrap" onPointerDown={onBarPointer}><span className="reel-progress-track"/><span ref={fillRef} className="reel-progress-fill"/><input ref={rangeRef} type="range" min="0" max="1000" defaultValue="0" onChange={onScrub} aria-label="Scrub agency reel" aria-valuetext={motionScenes[activeIndex].label}/><div className="reel-progress-cues">{motionScenes.map((scene)=><button type="button" key={scene.id} style={{left:`${scene.start/REEL_DURATION*100}%`}} onClick={()=>{seek(Math.min(scene.start+1.3,scene.end-.25)/REEL_DURATION);void audioRef.current?.pause();setPlaying(false)}} aria-label={`Go to ${scene.label}`}/>)}</div></div><div className="reel-controls"><button type="button" onClick={toggle} aria-label={playing?"Pause reel":"Play reel"}>{playing?<Pause size={16}/>:<Play size={16}/>}</button><button type="button" onClick={replay} aria-label="Replay reel"><RotateCcw size={16}/></button><button type="button" onClick={()=>{void toggleMusic();}} aria-label={musicEnabled?"Turn music off":"Turn music on"} aria-pressed={musicEnabled} title={musicEnabled?"Music on":"Music off"}>{musicEnabled?<Volume2 size={16}/>:<VolumeX size={16}/>}</button><a href="#systems" onClick={skip}>Skip to Site <ArrowDown size={14}/></a></div></div>
  </section>;
}
