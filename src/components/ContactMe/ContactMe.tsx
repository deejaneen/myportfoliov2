"use client";
import React from "react";
import BubblesCM from "../BubblesContactMe/BubblesContactMeAnimation";
import "./ContactMe.css";
import { easeInOut, motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="contactme__container mix-blend-multiply">
      <div className="text-container">
        <motion.h2
          className="section-title"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 0.75 }}
        >
          Contact Me
        </motion.h2>
        <motion.ul
          className="links"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 0.75 }}
        >
          <li>
            <a
              href="https://linkedin.com/in/dttomelden"
              className="link-item linkedin cursor-pointer"
              target="_blank"
              aria-label="Link that redirects to Djanine Tara Tomelden LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:tomeldendjaninetara@gmail.com"
              className="link-item email cursor-pointer"
              target="_blank"
              aria-label="Link to email Djanine Tara Tomelden"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/deejaneen"
              className="link-item github cursor-pointer"
              target="_blank"
              aria-label="Link that redirects to Djanine Tara Tomelden Github Profile"
            >
              Github
            </a>
          </li>
        </motion.ul>
        <motion.p
          className="copyright"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 0.75 }}
        >
          © Code and Design By Deeja
        </motion.p>
      </div>
      <div className="bubbles__container">
        <BubblesCM />
      </div>
    </div>
  );
};

export default ContactMe;
