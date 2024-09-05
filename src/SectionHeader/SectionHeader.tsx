"use client";
import React from "react";
import "./SectionHeader.css";
import { easeInOut, motion } from "framer-motion";
const SectionHeader = ({
  title,
  aboveTitle,
  belowTitle,
}: SectionHeaderProps) => {
  return (
    <motion.h2
      className="header-2-align"
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.75 }}
    >
      <span className="paragraph">{aboveTitle}</span>
      <span className="header-2 uppercase">{title}</span>
      <span className="paragraph">{belowTitle}</span>
    </motion.h2>
  );
};

export default SectionHeader;
