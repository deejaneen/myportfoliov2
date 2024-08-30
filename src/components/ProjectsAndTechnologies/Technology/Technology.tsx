"use client";

import React, { useState } from "react";
import { technologiesData } from "../technologies";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
const Technology = ({ category, onClick }: TechnologyProps) => {
  const [items, setItems] = useState(technologiesData);
  const [isOpen, setIsOpen] = useState(true);

  const categoryCurrent = category;


  return (
    <div className="min-w-full technology-container">
      <div className="technology-title">
        <div
          className="technology-item"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="title-text"> {category} </span>
          <span className="open-toggle"> {isOpen ? <FaMinus /> : <FaPlus />}</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="flex items-center justify-center mapped-items-container">
            {items
              .filter((item) => item.category === category)
              .map((elem) => {
                const { id, icon, title } = elem;
                return (
                  <div key={id} className="p-2 " onClick={() => onClick(title)}>
                    <div>
                      <div className="technologies-category-item p-2">
                        <img
                          src={icon}
                          alt={title}
                          className="object-contain"
                        />
                        <p className="text-center text-[12px]">{title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Technology;
