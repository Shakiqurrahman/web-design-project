import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import footerBg from "../assets/footer-bg.png";

const Footer = () => {
  return (
    <footer className="relative sm:mt-0 mt-[900px] flex flex-col items-center md:bg-transparent bg-blue-600 md:justify-center  h-full md:py-0  py-10 text-inter">
      <img className="absolute sm:h-[160vh] md:visible invisible" src={footerBg} alt="footer bg" />
      <div className="text-white flex flex-col items-center justify-center relative md:top-36 z-10 md:mt-16">
        <h2 className=" text-[25px] font-medium mb-3">Newsletter</h2>
        <p className="sm:w-[500px] text-center text-sm mb-8 sm:mx-0 mx-8">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>
        <div className="bg-deep-blue  sm:pl-6 pl-3 pr-2 py-2  rounded-lg flex items-center sm:w-[120%] w-[80%]">
          <IoMailOutline size={22} className="mr-3" />
          <input
            className="bg-transparent focus:outline-none placeholder:text-white sm:w-full w-8/12  inline-block"
            placeholder="Enter your email"
            type="email"
          />
          <button className="gradient px-6 py-2 font-medium rounded-md">
            Submit
          </button>
        </div>
      </div>
      <div className="flex z-10 text-white mt-20 sm:ml-0 ml-8 relative md:top-36  md:flex-row flex-col
      ">
        <div className="sm:mr-36 md:mb-0 mb-10">
          <h2 className="text-2xl mb-3 font-medium">Logo</h2>
          <p className="text-sm sm:w-[450px] w-10/12">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex mt-9">
            <span className="bg-deep-blue mr-2 rounded-full  px-3 py-3">
              <FaFacebookF />
            </span>
            <span className="bg-deep-blue mr-2 rounded-full px-3 py-3">
              <FaInstagram />
            </span>
            <span className="bg-deep-blue mr-2 rounded-full px-3 py-3">
              <FaTwitter />
            </span>
            <span className="bg-deep-blue mr-2 rounded-full px-3 py-3">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <ul className="sm:mr-16 md:mb-0 mb-10">
          <h2 className="text-lg mb-4 font-medium">Company</h2>
          <li className="mb-4 text-[15px]">About</li>
          <li className="mb-4 text-[15px]">Blog</li>
          <li className="text-[15px]">Career</li>
        </ul>
        <ul className="sm:mr-16 md:mb-0 mb-10">
          <h2 className="text-lg mb-4 font-medium">Services</h2>
          <li className="mb-4 text-[15px]">Email Marketing</li>
          <li className="mb-4 text-[15px]">Campaigns</li>
          <li className="mb-4 text-[15px]">Branding</li>
          <li className="text-[15px]">offline</li>
        </ul>
        <ul className="sm:mr-16 md:mb-0 mb-10">
          <h2 className="text-lg mb-4 font-medium">About</h2>
          <li className="mb-4 text-[15px]">Our Story</li>
          <li className="mb-4 text-[15px]">Benefits</li>
          <li className="mb-4 text-[15px]">Team</li>
          <li className="text-[15px]">Careers</li>
        </ul>
        <ul className="md:mb-0 mb-10">
          <h2 className="text-lg mb-4 font-medium">Help</h2>
          <li className="mb-4 text-[15px]">FAQs</li>
          <li className="mb-4 text-[15px]">Term & Conditions</li>
          <li className="text-[15px]">Private Policy</li>
        </ul>
      </div>
      <p className="z-10 text-white relative md:top-60">© Copyright 2023</p>
    </footer>
  );
};

export default Footer;
