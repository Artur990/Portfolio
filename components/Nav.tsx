import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  return (
    <div className="z-2 fixed left-1/3 bottom-2 flex justify-center ">
      <nav
        className="h-15 flex  w-auto translate-x-[50%] justify-center
       gap-[0.8rem] rounded-[3rem] bg-black px-[7px] py-[1rem] 
     align-middle  opacity-90
     "
      >
        <a
          href="#"
          className="mx-1 ml-2 flex h-7 w-7 rounded-[50%]   bg-transparent px-1 py-1 text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black"
        >
          <AiOutlineHome />
        </a>
        <a
          href="#"
          className="mx-1 flex h-7 w-7 rounded-[50%]   bg-transparent  px-1    py-1 text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black"
        >
          <AiOutlineUser />
        </a>
        <a
          href="#"
          className="mx-1 flex h-7 w-7 rounded-[50%] bg-transparent px-1  py-1    text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black"
        >
          <BiBook />
        </a>
        <a
          href="#"
          className="mx-1  flex h-7 w-7 rounded-[50%] bg-transparent px-1  py-1  text-lg text-white hover:opacity-70   active:bg-inherit   active:bg-slate-100 active:text-black"
        >
          <BiMessageDetail />
        </a>
        <a
          href="#"
          className="mx-1 mr-2 flex h-7 w-7 rounded-[50%]  bg-transparent px-1 py-1 text-lg text-white active:bg-inherit   active:bg-slate-100 active:text-black"
        >
          <RiServiceLine />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
