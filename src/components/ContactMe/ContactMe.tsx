import React from "react";
import BubblesCM from "../BubblesContactMe/BubblesContactMeAnimation";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contactme__container mix-blend-multiply">
      <div className="text-container">
        <h2 className="section-title">Contact Me</h2>
        <ul className="links">
          <li>
            <a
              href="https://linkedin.com/in/dttomelden"
              className="link-item linkedin cursor-pointer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:tomeldendjaninetara@gmail.com"
              className="link-item email cursor-pointer"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/deejaneen"
              className="link-item github cursor-pointer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="copyright">© Code and Design By Deeja</p>
      </div>
      <div className="bubbles__container">
        <BubblesCM />
      </div>
    </div>
  );
};

export default ContactMe;
