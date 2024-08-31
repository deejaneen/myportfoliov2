import React from "react";
import { BiHardHat } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

export const myjourneyData = [
  {
    id: 1,
    title:
      "HR Recruitment Consultant, Sales Trainer, Customer Sales Consultant",
    org: "RARE AGENCY",
    date: "2021-2022",
    des: "Part-time job where I started as a Customer Sales Consultant for a US-based company. I was promoted to Sales Trainer shortly after and then to HR Recruitment Consultant",
    icon: React.createElement(CgWorkAlt),
    direction: "right",
  },
  {
    id: 2,
    title: "Social Media Manager",
    org: "Sandbox",
    date: "2022",
    des: "Part-time job where I produced high-quality social content for multi-channel marketing across different social media platforms.",
    icon: React.createElement(CgWorkAlt),
    direction: "left",
  },
  {
    id: 3,
    title: "Capstone Project",
    org: "University of Baguio",
    date: "2022-2023",
    des: "Developed and deployed a platformer game centered around Philippine mythology",
    icon: React.createElement(FaComputer),
    direction: "right",
  },
  {
    id: 4,
    title: "On-the-job Training",
    org: "Commission on Audit - Cordillera Administrative Region",
    date: "2024",
    des: "Collaborated closely with stakeholders to gather requirements and design solutions in the development of a Reservation System for COA-CAR.",
    icon: React.createElement(CgWorkAlt),
    direction: "left",
  },
  {
    id: 5,
    title: "Graduation",
    org: "BS Computer Science - University of Baguio",
    date: "2024",
    des: "Woohoo! I finally did it!",
    icon: React.createElement(LuGraduationCap),
    direction: "right",
  },
  {
    id: 6,
    title: "Achievement Still Locked",
    org: "Still coding my way out of this",
    date: "2024",
    des: "Be part of my journey.",
    icon: React.createElement(BiHardHat),
    direction: "left",
  },
];
