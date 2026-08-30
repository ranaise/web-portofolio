import Image from "next/image";
import { experienceData, orgExperienceData } from "@/data";
import { Reveal } from "@/components/reveal";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { PhotoLightbox } from "@/components/photo-lightbox";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return <>{parts.map((part, index) => part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part)}</>;
}

export function Experience() {
  const experience = experienceData[0];

  return (
    <section id="experience" className="experience-page-content home-experience-block">
      <BotanicalDecoration className="section-botanical section-botanical-right experience-botanical" />
      <header className="experience-section-heading">
        <p className="section-kicker"><span>02</span><span>Experience</span></p>
        <div>
          <p className="chapter-label">Professional experience</p>
          <h2>{experience.role} at {experience.company}</h2>
        </div>
      </header>

      <Reveal className="experience-feature">
        <aside className="experience-meta">
          <p className="chapter-label">Internship</p>
          <strong>{experience.duration}</strong>
          <span>{experience.location}</span>
          <span className="completed-label">{experience.status}</span>
        </aside>
        <article className="experience-entry-card">
          <header className="experience-title">
            <div>
              <p className="chapter-label">{experience.company}</p>
              <h3>{experience.role}</h3>
            </div>
            <span>Programming</span>
          </header>
          <div className="experience-entry-grid">
            <div className="experience-entry-copy">
              <p className="experience-summary">{experience.description}</p>
              <ul className="contribution-list">
                {experience.achievements.map((item, index) => <li key={item}><span>0{index + 1}</span><p><RichText text={item} /></p></li>)}
              </ul>
            </div>
            <div className="experience-page-photos">
              <PhotoLightbox images={[experience.photos[0]]} title="Medusa Technology team" description={<p>Rafa&apos;Na&apos;ilah during the programming internship at Medusa Technology.</p>} className="experience-photo-trigger"><Image src={experience.photos[0]} alt="Rafa with the Medusa Technology team" fill sizes="(max-width: 767px) calc(100vw - 40px), 48vw" className="object-contain" /></PhotoLightbox>
              <PhotoLightbox images={[experience.photos[1]]} title="Virtual world environment" description={<p>A virtual world environment built during the internship.</p>} className="experience-photo-trigger"><Image src={experience.photos[1]} alt="Virtual world environment at Medusa Technology" fill sizes="(max-width: 767px) calc(100vw - 40px), 26vw" className="object-contain" /></PhotoLightbox>
            </div>
          </div>
        </article>
      </Reveal>

      <section className="additional-experience">
        <header className="organization-heading">
          <div><p className="section-kicker"><span>03</span><span>Organization</span></p><h2>Leadership and learning outside class</h2></div>
          <p>Two experiences that shaped how I work with people and systems.</p>
        </header>
        <div className="organization-grid">
          {orgExperienceData.map((item, index) => <Reveal key={item.id} delay={index * .08} className="organization-card">
            <div className="organization-card-topline"><span className="organization-index">0{index + 1}</span><p className="chapter-label">{item.duration}</p></div>
            <div className="organization-card-copy"><h3>{item.role}</h3><p>{item.organization}</p><ul>{item.tasks.map((task) => <li key={task}>{task}</li>)}</ul></div>
            <div className="organization-photo">{item.photos?.[0] && <PhotoLightbox images={[item.photos[0]]} title={`${item.role} at ${item.organization}`} description={<p>Documentation of Rafa&apos;Na&apos;ilah&apos;s experience as {item.role} at {item.organization}.</p>} className="organization-photo-trigger"><Image src={item.photos[0]} alt={`${item.role} certificate`} fill sizes="(max-width: 767px) calc(100vw - 40px), 40vw" className="object-contain" /></PhotoLightbox>}</div>
          </Reveal>)}
        </div>
      </section>
    </section>
  );
}
