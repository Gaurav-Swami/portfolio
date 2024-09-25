import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="box-border">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
