import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Code2, Database } from "lucide-react";
import { experienceData } from "@/data";
import { Reveal } from "@/components/reveal";
import { BotanicalDecoration } from "@/components/botanical-decoration";

export function HomeExperiencePreview() {
  const experience = experienceData[0];

  return (
    <section className="home-section home-experience" aria-labelledby="internship-title"><BotanicalDecoration className="section-botanical section-botanical-left" />
      <header className="home-section-heading"><div><p className="section-kicker"><span>04</span><span>Experience</span></p><h2 id="internship-title">{experience.role} at {experience.company}</h2><p className="section-lede">{experience.duration}</p></div><Link href="/experience" className="text-action">Full experience <ArrowUpRight /></Link></header>
      <div className="experience-preview-grid">
        <Reveal className="experience-photo-collage"><div className="experience-photo experience-photo-main"><Image src="/medusa/photo-1.jpg" alt="Rafa with the Medusa Technology team" fill sizes="(max-width: 767px) calc(100vw - 40px), 52vw" className="object-contain" /></div><div className="experience-photo experience-photo-secondary"><Image src="/medusa/photo-2.jpg" alt="Virtual world environment built during the internship" fill sizes="(max-width: 767px) 42vw, 24vw" className="object-contain" /></div></Reveal>
        <Reveal delay={.08} className="internship-preview"><div className="internship-meta"><strong>Programming intern</strong><span>{experience.location}</span><span className="completed-label">{experience.status}</span></div><p>Built interactive virtual world systems for attendance, wardrobe, AI moderation, virtual shopping, and algorithm learning. Connected LSL objects to FastAPI services and delivered dashboards, scoring, checkout, and animated result playback.</p><div className="internship-tags"><span><Code2 /> Firestorm and OpenSim</span><span><Bot /> AI moderation</span><span><Database /> FastAPI and MariaDB</span></div></Reveal>
      </div>
    </section>
  );
}
