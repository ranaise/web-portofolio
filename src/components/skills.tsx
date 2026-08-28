import { hardSkillsCategories, softSkillsList } from "@/data";
import { Reveal } from "@/components/reveal";
import { TechnologyMark } from "@/components/home-toolkit";

export function Skills() {
  return <section id="skills" className="section-shell skills-section"><header className="skills-section-bar"><p className="section-kicker"><span>04</span><span>Skills</span></p><div><p className="chapter-label">Technical toolkit</p><h2>Tools at a glance</h2></div></header><div className="skill-grid">{hardSkillsCategories.map((category, index) => <Reveal key={category.title} className="skill-cluster" delay={index * .04}><div className="skill-cluster-heading"><p className="chapter-label">0{index + 1}, {category.title}</p><span>{category.skills.length}</span></div><div className="skill-icon-grid">{category.skills.map((skill) => <TechnologyMark key={skill.name} skill={skill} />)}</div></Reveal>)}</div><div className="soft-skill-line"><span className="chapter-label">Work style</span>{softSkillsList.map((skill) => <span key={skill}>{skill}</span>)}</div></section>;
}
