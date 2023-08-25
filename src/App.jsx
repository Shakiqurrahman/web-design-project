import React from "react";

import EmailSheet from "./components/EmailSheet";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./style";
import WorksCard from "./components/WorksCard";
import Team from "./components/Team";

import bgImg from "./assets/bg.png";
import teamBg from "./assets/team-bg.png";
import Testimonials from "./components/Testimonials";
import SlideCard from "./components/SlideCard";


const App = () => {
  return (
    <div className="w-full">
      <div>
        <img
          className="absolute top-0 left-0 w-full h-[130%] xs:h-[190%] sm:h-[150%] lg:h-auto object-cover  "
          src={bgImg}
          alt="bg Image"
        />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}  ${styles.paddingX}`}>
            <Hero />
          </div>
        </div>
      </div>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <EmailSheet />
      </div>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <WorksCard />
      </div>
      <div className="relative">
        <img className="absolute top-[380px]" src={teamBg} alt="team bg" />
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Team />
      </div>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Testimonials />
      </div>
      </div>
      <SlideCard />
    </div>
  );
};

export default App;
