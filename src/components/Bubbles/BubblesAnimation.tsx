"use client";
import React, { useEffect } from "react";
import {
  useAnimate,
} from "framer-motion";
import { motion } from "framer-motion";
import "./Bubbles.scss";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Bubbles = () => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    const bubbleElements = document.querySelectorAll(`.bubble`);
    const bubble2Elements = document.querySelectorAll(`.bubbles`);

    bubbleElements.forEach((element, index) => {
      setTimeout(() => {
        animate(
          element,
          {
            y: [randomNumberBetween(300, 500), randomNumberBetween(-500, -700)],
            x: [
              randomNumberBetween(-100, 100),
              randomNumberBetween(-100, 100),
              randomNumberBetween(-100, 100),
            ],
            scale: [0.75, 0.25, 0],
            opacity: 1,
          },
          {
            delay: randomNumberBetween(0.1, 0.7),
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
          }
        );
      }, index * 50);
    });
    bubble2Elements.forEach((element, index) => {
      setTimeout(() => {
        animate(
          element,
          {
            y: [0, randomNumberBetween(-20, -50), 0],
            opacity: 1,
          },
          {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            type: "tween",
          }
        );
      }, index * 50);
    });
  }, [animate]);

  return (
    <div ref={scope} className="mix-blend-multiply">
      <motion.div className="bubble bubbles1" drag></motion.div>
      <motion.div className="bubble bubbles2" drag></motion.div>
      <motion.div className="bubble bubbles3" drag></motion.div>
      <motion.div className="bubble bubbles4" drag></motion.div>
      <motion.div className="bubble bubbles5" drag></motion.div>
      <motion.div className="bubble bubbles6" drag></motion.div>
      <motion.div className="bubble bubbles7" drag></motion.div>
      <motion.div className="bubble bubbles8" drag></motion.div>
      <motion.div className="bubble bubbles9" drag></motion.div>
      <motion.div className="bubble bubbles10" drag></motion.div>
      <motion.div className="bubble bubbles11 " drag></motion.div>
      <motion.div className="bubble bubbles12 " drag></motion.div>
      <motion.div className="bubble bubbles13 " drag></motion.div>
      <motion.div className="bubble bubbles14 " drag></motion.div>
      <motion.div className="bubble bubbles15 " drag></motion.div>
      <motion.div className="bubble bubbles16 " drag></motion.div>
      <motion.div className="bubble bubbles17 " drag></motion.div>
      <motion.div className="bubble bubbles18 " drag></motion.div>
      <motion.div className="bubbles bubbles1" drag></motion.div>
      <motion.div className="bubbles bubbles2" drag></motion.div>
      {/* <motion.div className="bubbles bubbles3"></motion.div> */}
      <motion.div className="bubbles bubbles4" drag></motion.div>
      {/* <motion.div className="bubbles bubbles5"></motion.div> */}
      {/* <motion.div className="bubbles bubbles6"></motion.div> */}
      <motion.div className="bubbles bubbles7" drag></motion.div>
      <motion.div className="bubbles bubbles8" drag></motion.div>
      <motion.div className="bubbles bubbles9" drag></motion.div>
      <motion.div className="bubbles bubbles10" drag></motion.div>
      <motion.div className="bubbles bubbles11" drag></motion.div>
      <motion.div className="bubbles bubbles12" drag></motion.div>
      <motion.div className="bubbles bubbles13" drag></motion.div>
      {/* <motion.div className="bubbles bubbles14"></motion.div> */}
      <motion.div className="bubbles bubbles15" drag></motion.div>
      <motion.div className="bubbles bubbles16" drag></motion.div>
      <motion.div className="bubbles bubbles17" drag></motion.div>
      {/* <motion.div className="bubbles bubbles18"></motion.div> */}
    </div>
  );
};

export default Bubbles;
