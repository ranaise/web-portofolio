import { hardSkillsCategories, softSkillsList } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return <section id="skills" className="section-shell"><SectionHeading index="04" label="Skills" title="Technical toolkit" description="Technologies grouped by how I use them in a project." /><div className="skill-grid">{hardSkillsCategories.map((category, index) => <Reveal key={category.title} className="skill-cluster" delay={index * .04}><p className="chapter-label">0{index + 1}, {category.title}</p><ul>{category.skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}</ul></Reveal>)}</div><div className="soft-skill-line"><span className="chapter-label">Work style</span>{softSkillsList.map((skill) => <span key={skill}>{skill}</span>)}</div></section>;
}
