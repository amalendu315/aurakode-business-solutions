"use client";
import { motion, useReducedMotion } from "framer-motion";
const steps = [
  { tag: "DISCOVER", title: "Understand the challenge.", text: "We learn your goals, audience, current tools, and the gaps between them." },
  { tag: "DESIGN", title: "Shape the system.", text: "We map the brand and experience before pixels and code move into production." },
  { tag: "BUILD", title: "Make it real.", text: "We design, develop, and connect the pieces with clear reviews along the way." },
  { tag: "GROW", title: "Improve what matters.", text: "We launch, observe, and refine using real signals from your business." },
];
export function ProcessTimeline() { const reduced=useReducedMotion(); return <section id="process" className="section process-section"><div className="section-heading"><span className="eyebrow">03 / HOW WE WORK</span><h2>From the first idea<br/><em>to what&apos;s next.</em></h2><p>A clear route from discovery to launch, with every decision tied to the outcome you need.</p></div><div className="process-list">{steps.map((step,i)=><motion.article key={step.tag} initial={reduced?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.35}} transition={{duration:.6,delay:i*.08}} className="process-step"><span className="process-index">0{i+1}</span><div><small>{step.tag}</small><h3>{step.title}</h3></div><p>{step.text}</p></motion.article>)}</div></section>; }
