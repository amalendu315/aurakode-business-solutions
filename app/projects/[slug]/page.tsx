import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import "./project.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const path = `/projects/${slug}`;
  const title = `${project.name} Project | AuraKode Business Solutions`;
  const description = `${project.summary} ${project.role}. Explore the project and open the live website.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: project.image }] },
    twitter: { card: "summary_large_image", title, description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex(({ slug: item }) => item === slug) + 1) % projects.length];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aurakode.in/" },
      { "@type": "ListItem", position: 2, name: "Selected work", item: "https://aurakode.in/#real-work" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://aurakode.in/projects/${slug}` },
    ],
  };

  return <main className={`project-detail project-detail--${slug}`} id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    <section className="project-hero">
      <div className="site-shell">
        <nav className="project-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#real-work">Selected work</Link><span>/</span><span aria-current="page">{project.name}</span></nav>
        <div className="project-hero-grid">
          <div className="project-hero-copy">
            <span className="project-kicker">PROJECT / {project.category}</span>
            <h1>{project.name}<span className="project-title-dot">.</span></h1>
            <p className="project-lead">{project.summary}</p>
            <div className="project-actions"><a className="project-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Explore live website <ArrowUpRight size={18} aria-hidden="true" /></a><Link className="project-back" href="/#real-work"><ArrowLeft size={17} aria-hidden="true" /> All projects</Link></div>
          </div>
          <div className="project-visual"><Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 48vw" /><div className="project-visual-caption"><span>LIVE PROJECT</span><span>{project.name.toUpperCase()}</span></div></div>
        </div>
      </div>
    </section>
    <section className="project-story"><div className="site-shell project-story-grid"><div className="project-story-label"><span className="project-kicker">THE PROJECT</span><h2>A closer look.</h2><p className="project-role">{project.role}</p></div><div className="project-story-content"><p>{project.intro}</p><strong>{project.focus}</strong></div></div></section>
    <section className="project-details"><div className="site-shell"><div className="project-section-heading"><span className="project-kicker">THE EXPERIENCE</span><h2>What makes it useful.</h2></div><div className="project-detail-grid">{project.details.map((detail) => <article key={detail.number}><span>{detail.number}</span><h3>{detail.title}</h3><p>{detail.copy}</p></article>)}</div></div></section>
    <section className="project-next"><div className="site-shell project-next-inner"><div><span className="project-kicker">KEEP EXPLORING</span><h2>Next project: {nextProject.name}</h2></div><Link href={`/projects/${nextProject.slug}`} aria-label={`View ${nextProject.name} project`}><span>View project</span><ArrowRight size={22} aria-hidden="true" /></Link></div></section>
  </main>;
}
