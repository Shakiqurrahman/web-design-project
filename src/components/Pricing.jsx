import React from "react";

import shape1 from "../assets/Vector.png";
import pricingBg from "../assets/pricing-bg.png";
import shape2 from "../assets/shape-2.png";

import { BsCheck2Circle, BsPatchCheck } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="relative mt-36 font-inter lg:mb-[700px] sm:mb-[1150px] ss:mb-[850px] mb:[750px]">
      <h1 className="text-center mb-4 sm:text-[35px] text-xl font-semibold">
        Pricing plans for every need
      </h1>
      <p className="text-center sm:text-lg text-sm ">
        The most affordable WordPress SEO plugin.
      </p>
      <img
        className="absolute md:visible invisible top-24 left-0 "
        src={shape1}
        alt="shape 1"
      />
      <img
        className="absolute md:visible invisible top-16 right-0"
        src={shape2}
        alt="shape 2"
      />

      <div className="flex justify-center items-center relative">
        <div className=" bg-white sm:px-20 px-4 sm:py-16 py-4 absolute sm:top-20  top-10 rounded-3xl z-10 sm:w-10/12 ">
          <div className="flex md:flex-row flex-col-reverse justify-between md:items-center ">
            <div className="md:mr-16 mr-0">
              <p className="text-xl mb-6 text-[#2B2B5B]">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" />
                  Full Access to the Software
                </span>
              </p>
              <p className="text-xl mb-6 text-[#2B2B5B]">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" /> Amazon
                  Freebies
                </span>
              </p>
              <p className="text-xl mb-6 text-[#2B2B5B]">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" /> Amazon
                  Price Errors
                </span>
              </p>
              <p className="text-xl mb-6 text-[#2B2B5B]">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" /> 1,000+
                  Deals Daily
                </span>
              </p>
              <p className="text-xl mb-6 text-[#2B2B5B]">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" /> Personal
                  Pinger
                </span>
              </p>
              <p className="text-xl">
                <span className="flex items-center">
                  <BsCheck2Circle className="mr-3 text-[#85ABE5]" /> 1-on-1
                  Support
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center relative md:w-2/5 w-full md:mb-0 mb-10">
              <img className=" w-full" src={pricingBg} alt="Bg" />
              <div className="absolute text-white">
                <h2 className="text-[35px] px-0">$300 $50/month</h2>
                <p className="text-center mt-2 mb-8">Better Results</p>
                <div className="flex items-center cursor-pointer  bg-white px-3 py-3 font-bold text-black justify-center rounded-lg">
                  <BsPatchCheck size={25} className="mr-3 text-[#436EFF]" />
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
