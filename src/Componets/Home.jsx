import React, { useRef } from "react";
import "../Styles/Home.scss";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import myphoto from "../assets/My-pic.png";
import myResume from "../assets/Soham-Chogale-Resume.pdf";

// Start heder

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectCount = () => {
    animate(0, 100, {
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            <p>Hi, I Am </p>
            Soham Chogale
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Devloper...", "A Designer...", "A Creator..."],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-para",
              //   cursor:"none"
            }}
          />

          <div className="home-btn">
            <a href={myResume} download="Soham Chogale Resume.pdf">
              Download CV
            </a>

            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>chogalesoham74@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={myphoto} alt="My Photo" className="myphoto" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
