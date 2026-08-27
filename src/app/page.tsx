import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { HomeSelectedWork } from "@/components/home-selected-work";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() { return <><Navbar /><main id="home"><Hero /><About /><Experience /><HomeSelectedWork /><Skills /><Certifications /><Contact /></main><Footer /></>; }
