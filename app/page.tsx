import { Navbar } from "@/components/navbar";
import { HeroMotionStage } from "@/components/hero/hero-motion-stage";
import { CapabilitiesBento } from "@/components/sections/capabilities-bento";
import { ServicesPillars } from "@/components/sections/services-pillars";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { LeadCapture } from "@/components/sections/lead-capture";
import { Footer } from "@/components/footer";
import { FilmDirector } from "@/components/film-director";
import "./cinematic.css";

export default function Home() {
  return <div className="cinematic-site"><FilmDirector /><Navbar /><main id="main-content"><HeroMotionStage /><div className="film-interlude" aria-hidden="true"><span>THE STORY CONTINUES</span><i/><span>SCROLL TO EXPLORE</span></div><CapabilitiesBento /><ServicesPillars /><ProcessTimeline /><WorkShowcase /><LeadCapture /></main><Footer /></div>;
}
