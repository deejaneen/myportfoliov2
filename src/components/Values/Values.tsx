import React from "react";
import "./Values.css";
import SectionHeader from "@/SectionHeader/SectionHeader";
const Values = () => {
  return (
    <div className="values">
      <SectionHeader
        title="VALUES"
        aboveTitle="Here are my core"
        belowTitle="and principles"
      />
      <div className="values__text-box">
        <div className="values__text-box--text-left">
          <p className="value">
            At the core of my coding and design principles is a commitment to
            accessibility for all. Using semantic HTML for differently abled people so that we all may access information easier and more directly. My design prioritizes readability and comprehensibility, but imbued with intention and a touch of je ne sais quoi. Recently, I've been putting focus on creating websites that degrade beautifully, emphasizing importance on delivering information first before all.
          </p>
        </div>
        <div className="values__text-box--text-right">
          <p className="value">
            I like thinking creatively, working fast, yet thoughtfully, on how
            my code can have longevity and scalability -- for others who may
            seek to build upon my work in the future. I always strive to
            improve, grow, and learn alongside others so that we may all create
            better work and solutions as a whole.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
