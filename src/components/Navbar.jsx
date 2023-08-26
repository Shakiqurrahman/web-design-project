import { useState } from "react";
import { navLinks } from "../constants/data";

import { AiOutlineUserAdd } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative font-inter z-20 w-full flex py-6 justify-between items-center navbar">
      <h1 className="text-white text-[25px] font-bold">Web Design</h1>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal text-white cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" bg-[#004495] px-8 py-4 rounded-[40px] hidden sm:flex items-center text-white text-[16px] ease-in duration-300 hover:bg-white hover:text-[#004495] cursor-pointer">
        <AiOutlineUserAdd className="mr-3 text-xl" />
        Login
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="text-3xl text-white bg-[#004495] px-2 py-1 mr-5 rounded-[5px]  "
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <MdOutlineClose /> : <HiMenu />}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#004495] text-white absolute top-20 right-0 mx-6 my-2 min-w-[180px] rounded-[10px] sidebar`}
        >
          <ul className="list-none  flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-inter font-medium cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
