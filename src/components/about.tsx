import { educationDetails, quickFacts } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = ["Backend APIs", "AI and LLM tools", "Database design", "Realtime systems", "Computer vision", "Mobile applications"];

export function About() {
  return <section id="about" className="section-shell"><SectionHeading index="01" label="Profile" title="About me" description="A quick view of my background and the kind of work I enjoy." /><div className="about-layout"><Reveal className="about-intro-card"><p className="about-lead">I am Rafa&apos;Na&apos;ilah Septia, an Informatics student at Telkom University who enjoys turning complex ideas into useful software.</p><div className="about-stat-row"><div><strong>3.73</strong><span>GPA</span></div><div><strong>2026</strong><span>Graduation target</span></div><div><strong>AI</strong><span>Current focus</span></div></div></Reveal><Reveal delay={.08} className="about-fact-panel"><p className="chapter-label">Education</p><h3>{educationDetails.degree}</h3><p className="about-education">{educationDetails.institution}, GPA {educationDetails.gpa}</p><ul>{quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></Reveal></div><Reveal className="about-focus-list"><div className="about-focus-heading"><p className="chapter-label">Core focus</p><p>Areas I keep practicing through coursework and projects.</p></div><div className="about-focus-pills">{focusAreas.map((item, index) => <span key={item}><small>0{index + 1}</small>{item}</span>)}</div></Reveal></section>;
}
