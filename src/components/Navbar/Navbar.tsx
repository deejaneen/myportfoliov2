"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [buttonWhileHover, setbuttonWhileHover] = useState(false);
  return (
    <nav className="navbar__container mix-blend-difference">
      <ul className="flex justify-between w-full">
        <li>
          <a
            href="#"
            className="navbar-item flex-center"
            aria-label="Link that redirects to home page"
          >
            Djanine Tara Tomelden
          </a>
        </li>
        <li>
          <motion.a
            whileTap={{ scale: .95 }}
            href="/files/djaninetaratomeldenresume.pdf"
            download
            className=" navbar-button button flex-center"
            aria-label="Link that downloads resume"
            onMouseEnter={() => setbuttonWhileHover(true)}
            onMouseLeave={() => setbuttonWhileHover(false)}
          >
            <span
              className={`${buttonWhileHover ? "text-hidden" : "text-active"}`}
            >
              Available for Work
            </span>
            <span
              className={`${buttonWhileHover ? 
                "text-active" : "text-hidden"}`}
            >
              Download Resume
            </span>
          </motion.a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
