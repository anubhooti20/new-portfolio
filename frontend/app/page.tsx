import { apiFetch, HeroStatOut, AboutParagraphOut, ExperienceOut, SkillsResponse, MarqueeItemOut, ProjectOut } from "@/lib/api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Home() {
  const [heroStats, marqueeItems, aboutParagraphs, experience, skills, projects] =
    await Promise.all([
      apiFetch<HeroStatOut[]>("/api/hero-stats"),
      apiFetch<MarqueeItemOut[]>("/api/marquee"),
      apiFetch<AboutParagraphOut[]>("/api/about"),
      apiFetch<ExperienceOut[]>("/api/experience"),
      apiFetch<SkillsResponse>("/api/skills"),
      apiFetch<ProjectOut[]>("/api/projects"),
    ]);

  return (
    <>
      <Header />
      <Hero stats={heroStats} />
      <Marquee items={marqueeItems} />
      <About paragraphs={aboutParagraphs} />
      <Experience items={experience} />
      <Skills data={skills} />
      <Projects items={projects} />
      <Contact />
      <Footer />
    </>
  );
}
