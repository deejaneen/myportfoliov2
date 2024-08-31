import React from "react";
import BubblesCM from "../BubblesContactMe/BubblesContactMeAnimation";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <section className="contactme__container mix-blend-multiply">
      <div className="text-container">
        <h3 className="section-title">Contact Me</h3>
        <div className="links">
          <a href="https://linkedin.com/in/dttomelden" className="link-item linkedin cursor-pointer" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:tomeldendjaninetara@gmail.com" className="link-item email cursor-pointer" target="_blank">
            Email
          </a>
          <a href="https://github.com/deejaneen" className="link-item github cursor-pointer" target="_blank">
            Github
          </a>
        </div>
        <h5 className="copyright">© Code and Design By Deeja</h5>
      </div>
      <div className="bubbles__container">
        <BubblesCM />
      </div>
    </section>
  );
};

export default ContactMe;
