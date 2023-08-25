import React from "react";

import { BiChevronRight } from "react-icons/bi";
import teamImg from '../assets/team-img.png'
import teamShape from '../assets/team-img-shape.png'
import Testimonials from "./Testimonials";

const Team = () => {
  return (
    <section className="relative z-10 font-inter my-24 bg-white px-16 py-14 rounded-[45px] w-full">
      <div className="flex items-center justify-between">
        <div>
        <p className="mb-5 font-medium flex items-center"><span className="w-3.5 h-3.5 bg-[#305FD3] block mr-3 rounded-sm"></span>TEAM</p>
        <h2 className="font-semibold text-[35px] w-[424px] mb-3">Create consistent replies for your whole team.</h2>
        <p className="text-lg w-[574px] mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="stroke-btn">
          <span className="flex items-center relative top-[-5px]">
            View Projects <BiChevronRight />
          </span>
        </div>
        </div>
        <div className="relative">
            <img className="relative z-10" src={teamImg} alt="team img" />
            <img className="absolute bottom-[-20px] right-[-20px]" src={teamShape} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
