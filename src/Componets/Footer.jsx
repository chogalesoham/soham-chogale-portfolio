import React from "react";
import "../Styles/Footer.scss";
import { FiInstagram, FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import footerimg from "../assets/footer-img.png";

const Footer = () => {
  return (
    <section id="footer">
      <img src={footerimg} className="footer-img" />
      <div className="title-text">
        <h1>CONTACT US</h1>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <h1>Links</h1>
          <p>
            <a href="#top">Home</a>
          </p>
          <p>
            <a href="#work">Work</a>
          </p>
          <p>
            <a href="#timeline">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="footer-right">
          <h1>Get In Touch</h1>
          <p>
            Mumbai Maharashtra <FaLocationDot className="fa-brands" />
          </p>
          <p>
            Chogalesoham74@gmail.com <FaPaperPlane className="fa-brands" />
          </p>
          <p>
            +91 7020224131 <FaPhoneAlt className="fa-brands" />
          </p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/soham_chogale/">
          <FiInstagram className="fa-brands" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089224487576">
          <FiFacebook className="fa-brands" />
        </a>
        <a href="https://github.com/chogalesoham">
          <FiGithub className="fa-brands" />
        </a>
        <a href="https://www.linkedin.com/in/soham-chogale-237393242/">
          {" "}
          <FiLinkedin className="fa-brands" />
        </a>

        <p>CopyRight ©️Chogale Soham</p>
      </div>
    </section>
  );
};

export default Footer;
