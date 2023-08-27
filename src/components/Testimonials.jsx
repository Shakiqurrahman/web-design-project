import React from "react";

import SlideTestimonial from "./SlideTestimonial";

const Testimonials = () => {
  return (
    <div className="relative z-20 font-inter">
      <p className="uppercase font-medium sm:text-lg text-sm text-center text-white mb-2.5">
        testimonials
      </p>
      <h2 className="font-semibold sm:text-[35px] text-[25px] text-center text-white sm:mb-0">
        What Our Clients Say About Us
      </h2>
      <div className="flex md:flex-nowrap flex-wrap justify-between">
        {/* {testimonialData.map((data) => (
          <div key={data.id} className=" sm:mt-20 mt-10">
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
        ))} */}
        <SlideTestimonial />
      </div>
    </div>
  );
};

export default Testimonials;
