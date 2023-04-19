import React from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export const Nav = () => {
  const [activNav, setActivNav] = React.useState("header");

  return (
    <nav className=" fixed bottom-3 z-10 flex h-14 w-full ">
      <div className="flex h-full w-full justify-center ">
        <div
          className="flex w-auto  
       gap-[0.8rem] rounded-[3rem] bg-black px-[7px] py-[1rem]
     align-middle  opacity-90
     "
        >
          <a
            href="#header"
            onClick={() => setActivNav("header")}
            className={`
          mx-1 ml-2 flex h-7 w-7 rounded-[50%]   bg-transparent px-1 py-1 text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black ${
            activNav === "header" && "bg-slate-100 text-black"
          }`}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActivNav("about")}
            className={`mx-1 flex h-7 w-7 rounded-[50%]   bg-transparent  px-1    py-1 text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black ${
              activNav === "about" && "bg-slate-100 text-black"
            }`}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#myStack"
            onClick={() => setActivNav("myStack")}
            className={`mx-1 flex h-7 w-7 rounded-[50%]   bg-transparent  px-1    py-1 text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black ${
              activNav === "myStack" && "bg-slate-100 text-black"
            }`}
          >
            <BiBook />
          </a>
          <a
            href="#portfolio"
            onClick={() => setActivNav("portfolio")}
            className={`mx-1  flex h-7 w-7 rounded-[50%] bg-transparent px-1  py-1  text-lg text-white hover:opacity-70   active:bg-inherit   active:bg-slate-100 active:text-black ${
              activNav === "portfolio" && "bg-slate-100 text-black"
            }`}
          >
            <BiMessageDetail />
          </a>
          <a
            href="#contact"
            onClick={() => setActivNav("contact")}
            className={`mx-1 mr-2 flex h-7 w-7 rounded-[50%]  bg-transparent px-1 py-1 text-lg text-white active:bg-inherit   active:bg-slate-100 active:text-black ${
              activNav === "contact" && "bg-slate-100 text-black"
            }`}
          >
            <RiServiceLine />
          </a>
        </div>
      </div>
    </nav>
  );
};
