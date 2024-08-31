"use client";

import React, { useState } from "react";
import "./MyJourney.css";
import SectionHeader from "@/SectionHeader/SectionHeader";
import { BiHardHat } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

const myjourneyData = [
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

const MyJourney = () => {
  const [items, setItems] = useState(myjourneyData);
  return (
    <div className="bg-vanilla-cream myjourney__container">
      <div className="my-journey">
        <header className="header-2-align">
          <SectionHeader
            title="My Journey"
            aboveTitle="Follow"
            belowTitle="so far..."
          />
        </header>

        <ul className="timeline">
          {items.length > 0 && items[0].icon && (
            <li className="first-circle circle-container px-8 lg:px-0">
              <Circle icon={items[0].icon} />
              <div className="date-container w-full">{items[0].date}</div>
            </li>
          )}

          {items.map((elem, index) => {
            const { id, title, org, date, des, direction, icon } = elem;
            return (
              <li key={id} className="timeline-element-container">
                <div className="panel">
                  {elem.direction === "left" ? (
                    <JourneyCard
                      title={title}
                      des={des}
                      org={org}
                      direction={direction}
                    />
                  ) : (
                    <h4 className="date-right-container">{date}</h4>
                  )}
                  <Pillar />
                  {elem.direction === "right" ? (
                    <JourneyCard
                      title={title}
                      des={des}
                      org={org}
                      direction={direction}
                    />
                  ) : (
                    <h4 className="date-left-container">{date}</h4>
                  )}
                </div>
                {id < items.length && (
                  <div className="circle-container">
                    <Circle icon={items[index + 1].icon} />
                    <h4 className="date-container block lg:hidden">{date}</h4>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyJourney;
  
const Circle = ({ icon }: CircleProps) => {
  return (
    <div className="circle rounded-full">
      <span className="text-2xl icon">{icon}</span>
    </div>
  );
};

const Pillar = () => {
  return <div className="pillar rounded-t-full rounded-b-full  "></div>;
};

const JourneyCard = ({ title, org, des, direction }: MyJourneyProps) => {
  return (
    <article className="journeycard">
      <ul>
        {direction === "left" ? (
          <li className="journeycard-left">
            <div className="card-content-holder">
              <header>
                <h3 className="card-title">{title}</h3>
                <h4 className="card-description">{org}</h4>
              </header>
              <div className="card-content">{des}</div>
            </div>
          </li>
        ) : (
          <li className="journeycard-right">
            <div className="card-content-holder">
              <header>
                <h3 className="card-title">{title}</h3>
                <h4 className="card-description">{org}</h4>
              </header>
              <div className="card-content">{des}</div>
            </div>
          </li>
        )}
      </ul>
    </article>
  );
};
