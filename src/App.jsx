import React from "react";

import EmailSheet from "./components/EmailSheet";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./style";

import bgImg from "./assets/bg.png";
import WorksCard from "./components/WorksCard";

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
    </div>
  );
};

export default App;
