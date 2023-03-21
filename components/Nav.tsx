import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  return (
    <div>
      <nav
        className="bg-black opacity-90 w-full  px-[7px] py-[1.7rem]
     fixed z-30 left-1/2 translate-x-[50%] flex gap-[0.8rem] 
     rounded-[3rem] 
     blur-lg  
     "
      >
        <a
          href="#"
          className="bg-transparent p-[0.9rem] rounded-[50%] flex text-emerald-400 text-lg"
        >
          <AiOutlineHome />
        </a>
        <a href="#">
          <AiOutlineUser />
        </a>
        <a href="#">
          <BiBook />
        </a>
        <a href="#">
          <BiMessageDetail />
        </a>
        <a href="#">
          <RiServiceLine />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
