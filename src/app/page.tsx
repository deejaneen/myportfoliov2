"use client";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsAndTechnologies from "@/components/ProjectsAndTechnologies/ProjectsAndTechnologies";
import ContactMe from "@/components/ContactMe/ContactMe";
import "@/components/App.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import MyJourney from "@/components/MyJourney/MyJourney";
export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <ReactLenis root>
        <header className="col-span-12">
          <Navbar />
        </header>
        <section className="col-span-12">
          <Hero />
        </section>
        <section className="col-span-12">
          <ProjectsAndTechnologies />
        </section>
        <section className="col-span-12">
          <MyJourney />
        </section>
        <footer className="col-span-12">
          <ContactMe />
        </footer>
      </ReactLenis>
    </main>
  );
}
