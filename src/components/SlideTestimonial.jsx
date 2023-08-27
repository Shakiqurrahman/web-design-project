import React, { useEffect, useState } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialData } from "../constants/data";

// Import Swiper React components
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperStyle.css";

import { Keyboard, Mousewheel, Navigation } from "swiper/modules";

SwiperCore.use([Navigation, Mousewheel, Keyboard]);

const TestimonialSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700 && window.innerWidth < 1000) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 1000) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="mySwiper"
      >
        {testimonialData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className=" mt-20">
              <div className="bg-white  sm:mr-12 rounded-[25px] sm:max-w-[350px] w-full px-14 py-8 flex flex-col items-center justify-center mb-10">
                <FaQuoteLeft className="text-3xl mb-5 text-[#1F94FB]" />
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
          </SwiperSlide>
        ))}
        <div className="testimonial-button">
          <div className="swiper-button-prev">
            <span className="bg-white drop-shadow-xl  text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
              <BsArrowLeftShort />
            </span>
          </div>
          <div className="swiper-button-next">
            <span className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md cursor-pointer">
              <BsArrowRightShort />
            </span>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
