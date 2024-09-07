"use client";
import SectionHeader from "@/SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import "./ProjectsAndTechnologies.css";
import { categoriesData } from "./technologies";
import { projectsData } from "./projects";
import { technologiesData } from "./technologies";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import Projects from "../Projects/Projects";

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
    <div className="bg-seafoam flex flex-row projectstechnologies__container">
      <section className="technologies text-seafoam">
        <SectionHeader
          title="TECHNOLOGIES"
          aboveTitle="I constantly try to add to and learn more about the"
          belowTitle="I work with"
        />
        <div className="technology-accordion">
          <p className="technology-sort-instructions pt-16">
            Click a technology to sort the projects
          </p>

          <ul className="flex flex-col items-center justify-center ">
            {category.map((elem) => {
              const { id, category } = elem;
              return (
                <li className="min-w-full technology-container" key={id}>
                  <div className="technology-title">
                    <h3
                      className="technology-item cursor-pointer"
                      onClick={() => toggleOpen(id.toString())}
                    >
                      <span className="title-text"> {category} </span>
                      <span className="open-toggle">
                        {isOpen[id] ? <FaMinus /> : <FaPlus />}
                      </span>
                    </h3>
                  </div>
                  <AnimatePresence>
                    {isOpen[id] && (
                      <ul className="flex items-center justify-center mapped-items-container">
                        {items
                          .filter((item) => item.category === category)
                          .map((elem) => {
                            const { id, icon, title } = elem;
                            return (
                              <li
                                key={id}
                                className={`p-2 filter-item cursor-pointer ${
                                  selectedFilters.includes(title)
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() => handleFilterButtonClick(title)}
                              >
                                <div className="technologies-category-item  p-2 ">
                                  <img
                                    src={icon}
                                    alt={`I have worked with {title}`}
                                    className="object-contain"
                                  />
                                  <p className="text-center text-[12px] hidden lg:block">
                                    {title}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="projects text-primary">
        <SectionHeader
          title="PROJECTS"
          aboveTitle="I constantly try to grow and add to my"
          belowTitle="portfolio"
        />
        <div className="projects-section">
          <p className="technology-sort-instructions pt-16">
            Click a technology to sort the projects
          </p>
          <ul className="projects__bento">
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
                <li className="project-container" key={id}>
                  <Projects
                    title={title}
                    des={des}
                    img={img}
                    liveLink={liveLink}
                    codeLink={codeLink}
                    projectWeight={projectWeight}
                    iconLists={iconLists}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndTechnologies;
