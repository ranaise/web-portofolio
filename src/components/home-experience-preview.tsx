import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Code2, Database } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BotanicalDecoration } from "@/components/botanical-decoration";

export function HomeExperiencePreview() {
  return (
    <section className="home-section home-experience" aria-labelledby="internship-title"><BotanicalDecoration className="section-botanical section-botanical-left" />
      <header className="home-section-heading"><div><p className="section-kicker"><span>04</span><span>Experience</span></p><h2 id="internship-title">Programming intern at Medusa Technology</h2><p className="section-lede">June 2026 to August 2026</p></div><Link href="/experience" className="text-action">Full experience <ArrowUpRight /></Link></header>
      <div className="experience-preview-grid">
        <Reveal className="experience-photo-collage"><div className="experience-photo experience-photo-main"><Image src="/medusa/photo-1.jpg" alt="Rafa with the Medusa Technology team" fill sizes="(max-width: 767px) calc(100vw - 40px), 52vw" className="object-contain" /></div><div className="experience-photo experience-photo-secondary"><Image src="/medusa/photo-2.jpg" alt="Virtual world environment built during the internship" fill sizes="(max-width: 767px) 42vw, 24vw" className="object-contain" /></div></Reveal>
        <Reveal delay={.08} className="internship-preview"><div className="internship-meta"><strong>Programming intern</strong><span>Jakarta, Indonesia</span><span className="completed-label">Completed</span></div><p>Built virtual world systems, realtime backend services, AI moderation tools, dashboards, and algorithm simulators.</p><div className="internship-tags"><span><Code2 /> Virtual world systems</span><span><Bot /> AI moderation</span><span><Database /> Python and MariaDB</span></div></Reveal>
      </div>
    </section>
  );
}
