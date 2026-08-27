import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const focuses = [{ title: "Backend systems", text: "APIs, state, validation, and dependable service boundaries." },{ title: "AI-assisted tools", text: "Practical AI workflows supported by deterministic logic and clear fallbacks." },{ title: "Interactive worlds", text: "Real-time behavior that connects interfaces, objects, and people." }];

export function HomeFocus() { return <section className="home-section home-focus" aria-labelledby="focus-title"><header><p className="chapter-label">Chapter 03 / Focus</p><h2 id="focus-title">Technical work, told clearly.</h2><p>I care about the hidden connections that make an experience feel coherent.</p><Link href="/about" className="text-action">About Rafa <ArrowUpRight /></Link></header><div className="focus-list">{focuses.map((focus, index) => <article key={focus.title}><span>0{index + 1}</span><h3>{focus.title}</h3><p>{focus.text}</p></article>)}</div></section>; }
