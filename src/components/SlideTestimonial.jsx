import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "../constants/data";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperStyle.css";

// import required modules
import { Navigation,  Mousewheel, Keyboard } from "swiper/modules";

export default function SlideTestimonial() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // navigation={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {testimonialData.map((data) => {
          return (
            <SwiperSlide key={data.id} >
              <div className=" mt-20">
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
            </SwiperSlide>
          );
        })}
        <div className="testimonial-next-prev-icon">
        <div className="swiper-button-prev">
          <span className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
            <BsArrowLeftShort />
          </span>
        </div>
        <div className="swiper-button-next">
          <span className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md sm:mr-4 cursor-pointer">
            <BsArrowRightShort />
          </span>
        </div>
        </div>
      </Swiper>
    </>
  );
}
