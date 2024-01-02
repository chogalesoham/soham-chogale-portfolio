import React from "react";
import "../Styles/Services.scss";
import { motion } from "framer-motion";
import { DiHtml5Connectivity } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Skils</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Year Experience</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <DiHtml5Connectivity />
          <span>HTML and CSS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <TbBrandJavascript />
          <span>Java-Script</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <TbBrandReactNative />
          <span>React and Redux</span>
        </motion.div>
      </section>

      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>
            {" "}
            <LiaLaptopCodeSolid />
          </h3>

          <p>Web Development</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaGithub />
          <span>Git and GitHub</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <SiTailwindcss />
          <span>Tailwind CSS</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaPython />
          <span>Python and DJango</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
