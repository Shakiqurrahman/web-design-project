import React from "react";

import { BiChevronRight } from "react-icons/bi";
import EmailSheetImg from "../assets/emailsheet.png";
import Circle from '../assets/Menu.png'
import URLAddress from '../assets/Address.png'

const EmailSheet = () => {
  return (
    <section className="sm:flex-row  relative flex flex-col-reverse items-center justify-center mt-0 sm:mt-10 sm:mb-20 mb-48 font-inter">
      <div className="sm:mr-[60px] bg-[#ffffffaf] p-4 rounded-xl drop-shadow-[0_-1px_5px_rgba(0,0,0,0.20)] sm:mb-0 mb-8">
        <div className="flex items-center rounded-xl drop-shadow-2xl mb-2 mx-2">
            <img className="mr-4" src={Circle} alt="circle" />
            <p className="w-full bg-white px-4 py-3 rounded-lg text-[#8993AE]">https://www.uiweb.io/</p>
        </div>
        <img className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.30)]"  src={EmailSheetImg} alt="Email Sheet img" />
      </div>
      <div className="sm:w-1/2">
        <div className="sm:block flex justify-center">
          <div className="bg-[#305FD3] font-medium text-white  pl-1.5 sm:pr-7 pr-5 py-4 rounded-[90px] inline-block mb-6">
            <span className="bg-[#0CCEFD] font-bold text-white  sm:px-7 px-4 py-3 mr-5 rounded-[90px]">
              About
            </span>
            Email, Sheets
          </div>
        </div>
        <h1 className="font-semibold text-xl sm:text-2xl lg:text-[35px] mb-3 sm:block flex justify-center">
          Email. Sheets. Code. Name it.
        </h1>
        <p className="text-[15px] sm:text-lg mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="sm:block flex justify-center">
        <div className="sm:static absolute bottom-[-5rem] ">
          <div className="stroke-btn ">
            <span className="flex items-center relative top-[-5px]">View Projects <BiChevronRight /></span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSheet;
