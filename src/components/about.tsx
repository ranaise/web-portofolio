import { educationDetails, quickFacts } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = ["Backend API Engineering", "AI and LLM Integration", "Relational Database Design", "Realtime System Architecture", "Computer Vision and Machine Learning", "Full stack Mobile Development"];

export function About() {
  return <section id="about" className="section-shell"><SectionHeading index="01" label="Profile" title="About me" description="My academic background, qualifications, and technical focus." /><div className="about-grid"><Reveal><div className="about-copy"><p>My name is <strong>Rafa&apos;Na&apos;ilah Septia</strong>, a sixth semester Informatics student at <strong>Telkom University</strong>.</p><p>I enjoy building backend services, designing efficient API systems, and exploring applied artificial intelligence. I completed a programming internship at <strong>Medusa Technology</strong>, where I worked on realtime virtual systems and AI moderation tools.</p><p>I focus on relational data design, query optimization, and clean system architecture. My goal is to create maintainable software that is useful in the real world.</p></div><div className="about-focus-list"><p className="chapter-label">Core focus</p><div>{focusAreas.map((item) => <span key={item}>{item}</span>)}</div></div></Reveal><Reveal delay={.08} className="fact-panel"><div><p className="chapter-label mb-3">Education</p><h3 className="text-2xl">{educationDetails.degree}</h3><p className="mt-2 text-muted-foreground">{educationDetails.institution}, GPA {educationDetails.gpa}</p></div><ul>{quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></Reveal></div></section>;
}
