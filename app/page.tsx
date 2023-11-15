import Hero from "@/components/Hero";
import Scroller from "@/components/Scroller";
import Projects from "@/components/Projects";
import Skillset from "@/components/Skillset";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Scroller />
      <Skillset />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
