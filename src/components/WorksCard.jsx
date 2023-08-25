import React from "react";

import { BiChevronRight } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import shape from "../assets/Vector.png";
import { worksCardData } from "../constants/data";

const WorksCard = () => {
  return (
    <section className="font-inter mt-28 mb-8 relative">
      <h1 className="font-semibold sm:text-[35px] xs:text-2xl text-xl text-center mb-12 drop-shadow-2xl">
        Works Everywhere You Do
      </h1>
      <img
        className="absolute right-0 top-6 md:visible invisible"
        src={shape}
        alt="shape img"
      />

      <div className="flex sm:flex-row flex-col items-center justify-between lg:flex-nowrap  sm:flex-wrap">
        {worksCardData.map((data) => (
          <div
            key={data.id}
            className="flexStart lg:w-auto md:w-[360px] sm:w-[300px] w-full flex-col sm:mr-8  sm:mb-16 mb-8 rounded-3xl px-10 py-12 drop-shadow-3xl bg-white"
          >
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
        ))}
      </div>
      <div className="flex justify-between">
        <span className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
          <BsArrowLeftShort />
        </span>
        <span className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md sm:mr-4 cursor-pointer">
          <BsArrowRightShort />
        </span>
      </div>
    </section>
  );
};

export default WorksCard;
