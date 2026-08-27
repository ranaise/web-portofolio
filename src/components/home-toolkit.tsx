import {
  Bot,
  Braces,
  Database,
  Globe2,
  ServerCog,
  Smartphone,
} from "lucide-react";

const toolkit = [
  { label: "Python", Icon: Braces },
  { label: "FastAPI", Icon: ServerCog },
  { label: "MariaDB", Icon: Database },
  { label: "Ollama", Icon: Bot },
  { label: "LSL", Icon: Globe2 },
  { label: "Flutter", Icon: Smartphone },
];

export function HomeToolkit() {
  return (
    <section className="toolkit-strip" aria-label="Main technology stack">
      <div className="toolkit-intro">
        <p className="section-kicker"><span>01</span><span>Toolkit</span></p>
        <p>Tools I use often.</p>
      </div>
      <div className="toolkit-items">
        {toolkit.map(({ label, Icon }) => (
          <div className="toolkit-item" key={label}>
            <span className="toolkit-icon" aria-hidden="true"><Icon /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
