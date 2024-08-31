'use client'
import React from "react";
import Button from "@/components/Button/Button";
import './Navbar.css';
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar__container mix-blend-difference">
      <div className="navbar-header">
        <a href="#"><h2 className="navbar-item flex-center">Djanine Tara Tomelden</h2></a>
        <motion.div className="navbar-button" whileTap={{scale:0.95}}><Button title="Available for work" altTitle="Download Resume" link=''/></motion.div>
      </div>  
    </nav>
  );
};

export default Navbar;
