'use client'
import React, { useRef } from "react";
import "./Projects.scss";
import { FaArrowUpRightFromSquare, FaGithub, FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
const Projects = ({
  title,
  des,
  img,
  iconLists,
  liveLink,
  codeLink,
  projectWeight,
}: ProjectsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0, 0.5], ["0%", "5%"]);
  const left = useTransform(mouseXSpring, [0, 0.5], ["0%","5%"]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div className="project relative top-0 left-0" style={{ top, left }} transition={{ type: "spring" }} ref={ref} onMouseMove={handleMouseMove}  onMouseLeave={handleMouseLeave} initial="initial"
      whileHover="whileHover">
      <div className="project__image-container" >
        <a href={liveLink} target="_blank">
          <Image
            src={img}
            alt={title}
            width={400}
            height={300}
            className="project__image"
          />
          <div className="gradient">
            <div className="tech-stack">
              {iconLists.map((icon, index) => (
                <span className="tech-stack-bubble" key={index}>
                  <img
                    src={icon}
                    alt={`I have worked with {title}`}
                    className="object-contain"
                  />
                </span>
              ))}
            </div>
            <p className="visit-project">
              Visit Project
              <FaArrowUpRightFromSquare />
            </p>
          </div>
        </a>
      </div>
      <div className="project__text-box">
        <h3
          className={`${
            projectWeight === "Heavy"
              ? "project__text--main__heavy"
              : "project__text--main__light"
          }`}
        >
          {title}
        </h3>
        <p className="project__text--sub">{des}</p>
        <ul className="project__buttons-container">
          <li className="project__buttons">
            <a
              href={codeLink}
              target="_blank"
              aria-label={`Link that redirects to ${title} website repository on github`}
            >
              <FaGithub /> &nbsp;Code
            </a>
          </li>
          <li className="project__buttons">
            <a
              href={liveLink}
              target="_blank"
              aria-label={`Link that redirects to ${title} website`}
            >
              <FaPlay /> &nbsp;Live
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
