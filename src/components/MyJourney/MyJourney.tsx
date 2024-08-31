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
    <section className="bg-vanilla-cream myjourney__container">
      <div className="my-journey">
        <div className="header-2-align">
          <SectionHeader
            title="My Journey"
            aboveTitle="Follow"
            belowTitle="so far..."
          />
        </div>

        <div className="timeline">
          {items.length > 0 && items[0].icon && (
            <div className="first-circle circle-container px-8 lg:px-0">
              <Circle icon={items[0].icon} />
              <div className="date-container w-full">{items[0].date}</div>
            </div>
          )}

          {items.map((elem, index) => {
            const { id, title, org, date, des, direction, icon } = elem;
            return (
              <div key={id} className="timeline-element-container">
                <div className="panel">
                  {elem.direction === "left" ? (
                    <JourneyCard
                      title={title}
                      des={des}
                      org={org}
                      direction={direction}
                    />
                  ) : (
                    <div className="date-right-container">
                      {date}
                    </div>
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
                    <div className="date-left-container">
                      {date}
                    </div>
                  )}
                </div>
                {id < items.length && (
                  <div className='circle-container'>
                    <Circle icon={items[index+1].icon} />
                    <div className="date-container block lg:hidden">{date}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
    <div className="journeycard">
      {direction === "left" ? (
        <div className="journeycard-left">
          <div className="card-content-holder">
            <div className="card-title">{title}</div>
            <div className="card-description">{org}</div>
            <div className="card-content">{des}</div>
          </div>
        </div>
      ) : (
        <div className="journeycard-right">
          <div className="card-content-holder">
            <div className="card-title">{title}</div>
            <div className="card-description">{org}</div>
            <div className="card-content">{des}</div>
          </div>
        </div>
      )}
    </div>
  );
};
