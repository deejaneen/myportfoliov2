"use client";
import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar__container mix-blend-difference">
      <ul className="flex justify-between w-full">
        <li>
          <a href="#" className="navbar-item flex-center" aria-label="Link that redirects to home page">
            Djanine Tara Tomelden
          </a>
        </li>
        <li>
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/files/djaninetaratomeldenresume.pdf"
            download
            className=" navbar-button button flex-center"
            aria-label="Link that downloads resume"
          >
            Available for work
          </motion.a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
