import React from "react";
import "../Styles/Heder.scss";
import { AiOutlineMenu } from "react-icons/ai";
import mylogo from "../assets/my-logo.png";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <img src={mylogo} alt="My Logo" />
      <div>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Projects
        </a>
        <a onClick={() => setMenuOpen(false)} href="#services">
          Skils
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>

      <a href="mailto:chogalesoham74@gmail.com">
        {" "}
        <button>Send Email</button>
      </a>
    </>
  );
};

export default Header;
