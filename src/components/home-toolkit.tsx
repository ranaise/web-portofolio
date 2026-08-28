import type { CSSProperties } from "react";
import { hardSkillsCategories } from "@/data";

const technologies = hardSkillsCategories.flatMap((category) => category.skills);
const rows = [technologies.filter((_, index) => index % 2 === 0), technologies.filter((_, index) => index % 2 === 1)];

function TechnologyMark({ skill }: { skill: (typeof technologies)[number] }) {
  const image = "devicon" in skill && skill.devicon ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.devicon}` : undefined;
  const shortName = skill.name === "Linden Scripting Language (LSL)" ? "LSL" : skill.name.slice(0, 3);
  return (
    <div className="tech-mark" role="img" aria-label={skill.name} title={skill.name}>
      {image ? <span className="tech-mark-image" style={{ backgroundImage: `url(${image})` } as CSSProperties} /> : <span className="tech-mark-custom">{shortName}</span>}
      <span className="sr-only">{skill.name}</span>
    </div>
  );
}

export function HomeToolkit() {
  return (
    <section className="toolkit-strip" aria-labelledby="toolkit-title">
      <div className="toolkit-intro"><p className="section-kicker"><span>02</span><span id="toolkit-title">Tech stack</span></p><p>Tools I use to build and learn</p></div>
      <div className="tech-marquee" aria-label="Technology icons">
        {rows.map((row, rowIndex) => <div className={`tech-track tech-track-${rowIndex + 1}`} key={rowIndex}>{[...row, ...row].map((skill, index) => <TechnologyMark key={`${skill.name}-${index}`} skill={skill} />)}</div>)}
      </div>
    </section>
  );
}
