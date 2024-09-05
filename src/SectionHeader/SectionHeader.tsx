
import React from "react";
import "./SectionHeader.css";
const SectionHeader = ({
  title,
  aboveTitle,
  belowTitle,
}: SectionHeaderProps) => {
  return (
    <h2
      className="header-2-align"
     
    >
      <span className="paragraph">{aboveTitle}</span>
      <span className="header-2 uppercase">{title}</span>
      <span className="paragraph">{belowTitle}</span>
    </h2>
  );
};

export default SectionHeader;
