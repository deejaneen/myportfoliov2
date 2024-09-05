"use client";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsAndTechnologies from "@/components/ProjectsAndTechnologies/ProjectsAndTechnologies";
import ContactMe from "@/components/ContactMe/ContactMe";
import "@/components/App.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import MyJourney from "@/components/MyJourney/MyJourney";
import Values from "@/components/Values/Values";

export default function Home() {
  return (
    <main className="">
      <ReactLenis root>
        <header className="">
          <Navbar />
        </header>
        <section className="">
          <Hero />
        </section>
        <section className="">
          <Values />
        </section>
        <section className="">
          <ProjectsAndTechnologies />
        </section>
        <section className="">
          <MyJourney />
        </section>
        <footer className="">
          <ContactMe />
        </footer>
      </ReactLenis>
    </main>
  );
}
