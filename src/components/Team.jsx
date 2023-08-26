import React from "react";

import { BiChevronRight } from "react-icons/bi";
import teamShape from "../assets/team-img-shape.png";
import teamImg from "../assets/team-img.png";

const Team = () => {
  return (
    <section className="relative z-10 font-inter my-24 sm:px-16 px-4 bg-white  sm:py-14 py-10 rounded-[45px] w-full">
      <div className="flex md:flex-row flex-col items-center sm:justify-between">
        <div className="md:mb-0 mb-10 sm:block flex flex-col items-center">
          <p className="sm:mb-5 mb-2 font-medium flex items-center">
            <span className="w-3.5 h-3.5 bg-[#305FD3] block mr-3 rounded-sm"></span>
            TEAM
          </p>
          <h2 className="font-semibold sm:text-[35px] text-[20px] sm:text-left text-center  sm:w-[424px] w-10/12  mb-3">
            Create consistent replies for your whole team.
          </h2>
          <p className="sm:text-lg text-sm sm:w-[574px] mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="stroke-btn">
            <span className="flex items-center relative top-[-5px]">
              View Projects <BiChevronRight />
            </span>
          </div>
        </div>
        <div className="relative">
          <img className="relative z-10" src={teamImg} alt="team img" />
          <img
            className="absolute  bottom-[-20px] right-[-20px] sm:visible invisible"
            src={teamShape}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
