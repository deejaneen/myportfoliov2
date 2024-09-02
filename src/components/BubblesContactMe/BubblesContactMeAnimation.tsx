"use client";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import "./BubblesContactMe.scss";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const BubblesCM = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const bubbleElements = document.querySelectorAll(`.bubblecm`);
    const bubble2Elements = document.querySelectorAll(`.bubblescm`);

    bubbleElements.forEach((element, index) => {
      setTimeout(() => {
        animate(
          element,
          {
            y: [
              randomNumberBetween(300, 500),
              randomNumberBetween(-500, -700),
            ],
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
    <div ref={scope} className="mix-blend-lighten">
      <motion.div className="bubblecm bubblescm1" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm2" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm3" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm4" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm5" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm6" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm7" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm8" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm9" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm10" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm11 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm12 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm13 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm14 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm15 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm16 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm17 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblecm bubblescm18 " drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm1" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm2" drag dragSnapToOrigin></motion.div>
      {/* <motion.div className="bubblescm bubblescm3"></motion.div> */}
      <motion.div className="bubblescm bubblescm4" drag dragSnapToOrigin></motion.div>
      {/* <motion.div className="bubblescm bubblescm5"></motion.div> */}
      {/* <motion.div className="bubblescm bubblescm6"></motion.div> */}
      <motion.div className="bubblescm bubblescm7" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm8" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm9" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm10" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm11" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm12" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm13" drag dragSnapToOrigin></motion.div>
      {/* <motion.div className="bubblescm bubblescm14"></motion.div> */}
      <motion.div className="bubblescm bubblescm15" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm16" drag dragSnapToOrigin></motion.div>
      <motion.div className="bubblescm bubblescm17" drag dragSnapToOrigin></motion.div>
      {/* <motion.div className="bubblescm bubblescm18"></motion.div> */}
    </div>
  );
};

export default BubblesCM;
