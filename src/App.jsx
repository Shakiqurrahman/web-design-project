import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmailSheet from "./components/EmailSheet";
import WorksCard from "./components/WorksCard";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import styles from "./style";

import bgImg from "./assets/bg.png";
import teamBg from "./assets/team-bg.png";

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
        <img className="absolute top-[380px] sm:h-auto h-[780px]" src={teamBg} alt="team bg" />
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <Team />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <Testimonials />
        </div>
      </div>
      <div className={`${styles.boxWidth}  ${styles.paddingX}`}>
        <Pricing />
      </div>
        <Footer />
    </div>
  );
};

export default App;
