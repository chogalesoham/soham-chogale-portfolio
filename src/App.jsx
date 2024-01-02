import React, { useState, useEffect } from "react";
import Heder, { HeaderPhone } from "./Componets/Heder";
import "./Styles/App.scss";
import "./Styles/Static.scss";
import Home from "./Componets/Home";
import Work from "./Componets/Work";
import Timeline from "./Componets/Timeline";
import Services from "./Componets/Services";
// import Testimonial from "./Componets/Testimonial";
import Contact from "./Componets/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./Componets/Footer";
import "./Styles/mediaquery.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return  (
    <div>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Heder menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
};

export default App;
