import React, { useEffect, useState } from "react";

// Import Swiper React components
import { BiChevronRight } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { worksCardData } from "../constants/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperStyle.css";
// import 'swiper/swiper-bundle.min.css';

// import required modules
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";

export default function SlideCard() {

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
        {worksCardData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="sm:mr-8  sm:mb-16 mb-8 rounded-3xl px-10 py-12 drop-shadow-3xl bg-white ">
                <img src={data.img} className="mb-8" alt="card image" />
                <h3 className="font-bold sm:text-xl text-lg w-4/5 mb-2.5">
                  {data.title}
                </h3>
                <p className="sm:text-[16px] text-base mb-8">{data.desq}</p>
                <div className="inline-block px-8 py-1.5 border border-[#3B6BFA] rounded-[40px]">
                  <span className="flex items-center cursor-pointer">
                    Saber más <BiChevronRight />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev slide-card md:top-90%">
          <span className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer md:p-3 md:mr-4">
            <BsArrowLeftShort />
          </span>
        </div>
        <div className="swiper-button-next slide-card md:top-90%">
          <span className="gradient drop-shadow-xl p-2 text-2xl rounded-md md:bg-gradient-to-r md:from-[#1F94FB] md:to-[#0067F4] text-white md:p-3 md:mr-4 cursor-pointer"><BsArrowRightShort />
          </span>
        </div>
      </Swiper>
    </>
  );
}
