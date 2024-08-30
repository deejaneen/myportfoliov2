"use client";
import SectionHeader from "@/SectionHeader/SectionHeader";
import React, { useState } from "react";
import "./ProjectsAndTechnologies.css";
import { categoriesData } from "./technologies";
import { projectsData } from "./projects";
import Technology from "./Technology/Technology";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const ProjectsAndTechnologies = () => {
  const [category, setCategory] = useState(categoriesData);

  const [project, setProject] = useState(projectsData);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );

 const filteredProjects = selectedTechnology
    ? projectsData.filter((project) =>
        (project.category || []).includes(selectedTechnology)
      )
    : projectsData;


  return (
    <section className="bg-seafoam flex flex-row projectstechnologies__container">
      <div className="technologies text-seafoam">
        <SectionHeader
          title="TECHNOLOGIES"
          aboveTitle="I constantly try to add to and learn more about the"
          belowTitle="I work with"
        />
        <div className="technology-accordion">
          <div className="flex flex-col items-center justify-center pt-16">
            {category.map((elem) => {
              const { id, category } = elem;
              return (
                <Technology
                  category={category}
                  onClick={(title) => setSelectedTechnology(title)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="projects text-primary">
        <SectionHeader
          title="PROJECTS"
          aboveTitle="I constantly try to grow and add to my"
          belowTitle="portfolio"
        />
        <div className="projects-section">
          <div className="flex flex-col items-center justify-center pt-16">
            {filteredProjects.map((elem) => {
              const { id, title, des, img, iconLists, liveLink, codeLink } =
                elem;
              return (
                <div key={id} className="min-w-full project-container">
                  <div className="project-item">
                    <div className="project-title">
                      <span className="project-title-text">{title}</span>
                      <span className="project-description">{des}</span>
                      <div className="project-buttons">
                        <button className="flex items-center justify-center">
                          <FaGithub /> &nbsp;Code
                        </button>
                        <button className="flex items-center justify-center">
                          <FaPlay /> &nbsp;Live
                        </button>
                      </div>
                      <div className="tech-stack">
                        <p className="mr-4">Tech Stack</p>

                        {iconLists.map((icon, index) => (
                          <motion.span
                            className="tech-stack-bubble"
                            key={index}
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <div className="w-full h-full">
                              <img
                                src={icon}
                                alt={title}
                                className="object-contain"
                              />
                            </div>
                          </motion.span>
                        ))}
                      </div>
                      <div className="image-container">
                        <Image
                          src={img}
                          alt={title}
                          width={400}
                          height={200}
                          className="rounded image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndTechnologies;
