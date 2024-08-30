import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsAndTechnologies from "@/components/ProjectsAndTechnologies/ProjectsAndTechnologies";
import MyJourney from "@/components/MyJourney/MyJourney";
import ContactMe from "@/components/ContactMe/ContactMe";
import '@/components/App.css';

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-12">
        <Navbar />
      </div>
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12">
        <ProjectsAndTechnologies />
      </div>
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12">
        <MyJourney />
      </div>
      <div className="col-span-12">
        <ContactMe />
      </div>
    </main>
  );
}
