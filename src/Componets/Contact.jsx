import React, { useState, useRef } from "react";
import "../Styles/Contact.scss";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();
    setDisableBtn(true);

    emailjs
      .sendForm(
        "service_w5oqla7",
        "template_hy846fy",
        form.current,
        "gtGiCCinVbJ1pDSvv"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Your Message Send Succesfully..");
          setDisableBtn(false);
        },
        (error) => {
          toast.error("Error...");
          setDisableBtn(false);
        }
      );
  };

  const animation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0%",
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={sendEmail} ref={form} {...animation.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <input
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Enter Your Message"
            required
          />
          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animation.button}
            type="submit"
            value="Send"
          >
            Send
          </motion.button>
        </motion.form>
      </section>

      <aside>
        <img src={vg} alt="vg img" />
      </aside>
    </div>
  );
};

export default Contact;
