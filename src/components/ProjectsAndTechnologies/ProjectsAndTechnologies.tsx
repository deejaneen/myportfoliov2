"use client";
import SectionHeader from "@/SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import "./ProjectsAndTechnologies.css";
import { categoriesData } from "./technologies";
import { projectsData } from "./projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { technologiesData } from "./technologies";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";

const ProjectsAndTechnologies = () => {
  const [category, setCategory] = useState(categoriesData);

  const [project, setProject] = useState(projectsData);
  const [items, setItems] = useState(technologiesData);
  const [isOpen, setIsOpen] = useState(
    categoriesData.reduce((acc, curr) => {
      acc[curr.id] = true; 
      return acc;
    }, {} as { [key: string]: boolean })
  );
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(project);

  let filters = [
    "PHP",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "Laravel",
    "React",
    "NextJS",
    "TailwindCSS",
    "Framer-Motion",
    "ChartJS",
    "React Hook Form",
    "ShadCN-UI",
    "Zod",
    "MariaDB",
    "MySQL",
    "Vite",
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "NodeJS",
    "Dwolla",
    "Plaid",
  ];
  const toggleOpen = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempProjects = projectsData.filter((project) =>
        selectedFilters.some((filter) => project.category.includes(filter))
      );
      setFilteredProjects(tempProjects);
    } else {
      setFilteredProjects([...projectsData]);
    }
  };

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
                <div className="min-w-full technology-container" key={id}>
                  <div className="technology-title">
                    <div
                      className="technology-item cursor-pointer"
                      onClick={() => toggleOpen(id.toString())}
                    >
                      <span className="title-text"> {category} </span>
                      <span className="open-toggle">
                        {isOpen[id] ? <FaMinus /> : <FaPlus />}
                      </span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen[id] && (
                      <motion.div
                        className="flex items-center justify-center mapped-items-container"
                      >
                        {items
                          .filter((item) => item.category === category)
                          .map((elem) => {
                            const { id, icon, title } = elem;
                            return (
                              <div
                                key={id}
                                className={`p-2 filter-item ${
                                  selectedFilters.includes(title)
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() => handleFilterButtonClick(title)}
                              >
                                <div className="technologies-category-item  p-2 ">
                                  <img
                                    src={icon}
                                    alt={title}
                                    className="object-contain"
                                  />
                                  <p className="text-center text-[12px] hidden lg:block">
                                    {title}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
            {filteredProjects.map((projects) => {
              const {
                id,
                category,
                title,
                des,
                img,
                iconLists,
                liveLink,
                codeLink,
                projectWeight,
              } = projects;
              return (
                <div className="min-w-full project-container" key={id}>
                  <div className="project-item">
                    <div className="project-title">
                      <span
                        className={`project-title-text ${
                          projectWeight === "Heavy" ? "heavy" : "light"
                        }`}
                      >
                        {title}
                      </span>
                      <span className="project-description">{des}</span>
                      <div className="project-buttons">
                        <a className="flex items-center justify-center" href={codeLink} target="_blank">
                          <FaGithub /> &nbsp;Code
                        </a>
                        <a className="flex items-center justify-center"  href={liveLink} target="_blank">
                          <FaPlay /> &nbsp;Live
                        </a>
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
                      <a href={liveLink} className="image-container hidden lg:block">
                        <Image
                          src={img}
                          alt={title}
                          width={400}
                          height={200}
                          className="rounded image"
                        />
                      </a>
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
