import React from "react";

import bgImg from "../assets/bg.png";
import leftHeroImg from "../assets/left-hero-img.png";
import ratings from "../assets/ratings.png";
import webDashboardImg from "../assets/Web Dashboard.png";

const Hero = () => {
  return (
    <section className="w-full flex justify-center lg:mb-[20rem] sm:mb-40 xs:mb-64 mb-24">
      <div className="sm:flex  relative z-1 items-center max-w-[1280px] sm:mt-20 mt-6  text-white">
        <div className="flex flex-col px-5 lg:px-0  sm:items-start items-center">
          <h1 className="font-inter text-xl sm:text-4xl font-bold  mb-3">
            Get back your time <br />
            everywhere you work
          </h1>
          <p className="sm:text-lg text-sm mb-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <img
            className="w-full ss:w-auto sm:mb-0 mb-4  bg-[rgba(255,255,255,0.86)]  p-4 rounded-xl"
            src={leftHeroImg}
            alt="left hero image"
          />
        </div>
        <div className="px-5 lg:px-0 flex flex-col items-center">
          <img
            className="lg:absolute top-[23rem] left-[30rem]  bg-[rgba(255,255,255,0.86)] p-4 rounded-xl"
            src={ratings}
            alt="ratings"
          />
          <img
            className="mt-4 lg:mt-0"
            src={webDashboardImg}
            alt="web Dashboard Image"
          />
        <div className="font-inter font-medium text-white bg-gradient-to-r from-[#1F94FB] to-[#00F2FE] px-8 py-3 rounded-[40px] z-10 lg:absolute bottom-3 left-0 inline-block mt-5 "> 
          Start For Free
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
