"use client";
import React from "react";
import "./Hero.scss";
import { motion, Variants } from "framer-motion";
import Bubbles from "../Bubbles/BubblesAnimation";
import Image from "next/image";

const pin = "/icons/pin.svg";
const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero-slice">
        <div className="location-container">
          <Image src={pin} alt="pin" width={30} height={30} />
          <p className="location">Philippines</p>
        </div>
        <h1 className="header-1">
          A{" "}FRONTEND{" "}<br className="lg:block hidden" />
          DEVELOPER{" "}THAT{" "}<br className="lg:block hidden" />
          TURNS{" "}IDEAS{" "}INTO{" "}<br className="lg:block hidden" />
          INTERACTIVE{" "}REALITY
        </h1>
      </div>
      <div className="bubbles__container cursor-pointer">
        <Bubbles />
      </div>
    </div>
  );
};

export default Hero;
