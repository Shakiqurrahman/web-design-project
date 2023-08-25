import React from "react";

import { testimonialData } from "../constants/data";
import {FaQuoteLeft} from 'react-icons/fa'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="relative z-20 font-inter">
      <p className="uppercase font-medium text-lg text-center text-white mb-2.5">
        testimonials
      </p>
      <h2 className="font-semibold text-[35px] text-center text-white mb-10">
        What Our Clients Say About Us
      </h2>
      <div className="flex md:flex-nowrap flex-wrap justify-between">
        {testimonialData.map((data) => (
          <div key={data.id} className=" mt-20">
            <div className="bg-white  sm:mr-12 rounded-[25px] sm:max-w-[350px] w-full px-14 py-8 flex flex-col items-center justify-center mb-10">
            <FaQuoteLeft className="text-3xl mb-5 text-[#1F94FB]"/>
              <p>{data.message}</p>
            </div>
            <div className="flex items-center">
              <img className="mr-5" src={data.img} alt="avatar" />
              <div>
                <h3>{data.name}</h3>
                <p>{data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-5 mt-12 mb-10">
        <span className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
          <BsArrowLeftShort />
        </span>
        <span className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md sm:mr-4 cursor-pointer">
          <BsArrowRightShort />
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
