import React from "react";
import Button from "@/components/Button/Button";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar__container mix-blend-difference">
      <div className="navbar-header">
        <h2 className="navbar-item flex-center">Djanine Tara Tomelden</h2>
        <div className="navbar-button"><Button title="Available for work" altTitle="Download Resume" link=''/></div>
      </div>  
    </nav>
  );
};

export default Navbar;
