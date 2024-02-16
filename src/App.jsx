import React from "react";
import Navbar from "../src/components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import Course from "./components/Course";
import Footer from "./components/Footer";
import EyeTrackingAnimation from "./components/EyeAnimation";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <LandingPage />
      <Marquee />
      <Course />
      <Footer />
      <EyeTrackingAnimation />
    </div>
  );
};

export default App;
