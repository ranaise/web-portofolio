import type { CSSProperties, ReactNode } from "react";
import {
  Activity,
  AppWindow,
  BrainCircuit,
  Bot,
  Boxes,
  Cable,
  CodeXml,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  ListChecks,
  Network,
  PanelTop,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const deviconByTechnology: Record<string, string> = {
  Python: "python/python-original.svg",
  "C++": "cplusplus/cplusplus-original.svg",
  Go: "go/go-original.svg",
  Java: "java/java-original.svg",
  PHP: "php/php-original.svg",
  Dart: "dart/dart-original.svg",
  HTML5: "html5/html5-original.svg",
  CSS3: "css3/css3-original.svg",
  TypeScript: "typescript/typescript-original.svg",
  JavaScript: "javascript/javascript-original.svg",
  FastAPI: "fastapi/fastapi-original.svg",
  "Spring Boot": "spring/spring-original.svg",
  "Java Spring Boot": "spring/spring-original.svg",
  Laravel: "laravel/laravel-original.svg",
  Flutter: "flutter/flutter-original.svg",
  "Next.js": "nextjs/nextjs-original.svg",
  MySQL: "mysql/mysql-original.svg",
  PostgreSQL: "postgresql/postgresql-original.svg",
  MariaDB: "mariadb/mariadb-original.svg",
  OpenCV: "opencv/opencv-original.svg",
  Linux: "linux/linux-original.svg",
  Figma: "figma/figma-original.svg",
  Git: "git/git-original.svg",
};

const officialBrandByTechnology: Record<string, string> = {
  "Groq API": "https://github.com/groq.png?size=96",
  Streamlit: "https://cdn.simpleicons.org/streamlit/FF4B4B",
  Ollama: "https://cdn.simpleicons.org/ollama",
  Flet: "https://github.com/flet-dev.png?size=96",
  Qwen: "https://cdn.simpleicons.org/qwen/615CED",
  "Llama 3": "https://cdn.simpleicons.org/meta/0866FF",
  "Firestorm/OpenSim": "https://github.com/FirestormViewer.png?size=96",
};

function renderFallbackIcon(name: string, className?: string): ReactNode {
  const normalized = name.toLowerCase();
  if (normalized.includes("streamlit") || normalized.includes("dashboard") || normalized.includes("monitoring")) return <PanelTop className={className} aria-hidden="true" />;
  if (normalized.includes("flet")) return <AppWindow className={className} aria-hidden="true" />;
  if (normalized.includes("groq")) return <Zap className={className} aria-hidden="true" />;
  if (normalized.includes("ollama")) return <Bot className={className} aria-hidden="true" />;
  if (normalized.includes("qwen") || normalized.includes("llama") || normalized.includes("llm")) return <BrainCircuit className={className} aria-hidden="true" />;
  if (normalized.includes("ai")) return <Sparkles className={className} aria-hidden="true" />;
  if (normalized.includes("http") || normalized.includes("json")) return <Cable className={className} aria-hidden="true" />;
  if (normalized.includes("firestorm") || normalized.includes("opensim") || normalized.includes("actor")) return <Globe2 className={className} aria-hidden="true" />;
  if (normalized.includes("state")) return <Workflow className={className} aria-hidden="true" />;
  if (normalized.includes("lsl") || normalized.includes("linden")) return <CodeXml className={className} aria-hidden="true" />;
  if (normalized.includes("xml")) return <FileCode2 className={className} aria-hidden="true" />;
  if (normalized.includes("database")) return <Database className={className} aria-hidden="true" />;
  if (normalized.includes("evaluator")) return <ListChecks className={className} aria-hidden="true" />;
  if (normalized.includes("score") || normalized.includes("result")) return <Activity className={className} aria-hidden="true" />;
  if (normalized.includes("simulator") || normalized.includes("backend")) return <ServerCog className={className} aria-hidden="true" />;
  if (normalized.includes("scene")) return <Boxes className={className} aria-hidden="true" />;
  if (normalized.includes("network")) return <Network className={className} aria-hidden="true" />;
  if (normalized.includes("security")) return <ShieldCheck className={className} aria-hidden="true" />;
  if (normalized.includes("git")) return <GitBranch className={className} aria-hidden="true" />;
  return <Activity className={className} aria-hidden="true" />;
}

export function TechnologyIcon({ name, className }: { name: string; className?: string }) {
  const officialBrand = officialBrandByTechnology[name];
  const devicon = deviconByTechnology[name];

  if (officialBrand) {
    return <span className={cn("technology-icon-image technology-icon-brand", className)} aria-hidden="true" style={{ backgroundImage: `url(${officialBrand})` } as CSSProperties} />;
  }

  if (devicon) {
    return <span className={cn("technology-icon-image", className)} aria-hidden="true" style={{ backgroundImage: `url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicon})` } as CSSProperties} />;
  }

  return renderFallbackIcon(name, cn("technology-icon-svg", className));
}
