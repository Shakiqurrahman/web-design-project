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
        <SlideTestimonial />
      </div>
    </div>
  );
};

export default Testimonials;
