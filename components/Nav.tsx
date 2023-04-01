import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activNav, setActivNav] = React.useState("header");
  return (
    <div className="fixed bottom-2  z-10 m-auto flex justify-center sm:left-1/3 ">
      <nav
        className="flex  w-auto translate-x-[50%] justify-center
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
            activNav === "about" ? "bg-slate-100 text-black" : ""
          }`}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActivNav("experience")}
          className={`mx-1 flex h-7 w-7 rounded-[50%] bg-transparent px-1  py-1    text-lg  text-white hover:opacity-70 active:bg-inherit active:bg-slate-100 active:text-black ${
            activNav === "experience" ? "bg-slate-100 text-black" : ""
          }`}
        >
          <BiBook />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActivNav("portfolio")}
          className={`mx-1  flex h-7 w-7 rounded-[50%] bg-transparent px-1  py-1  text-lg text-white hover:opacity-70   active:bg-inherit   active:bg-slate-100 active:text-black ${
            activNav === "portfolio" ? "bg-slate-100 text-black" : ""
          }`}
        >
          <BiMessageDetail />
        </a>
        <a
          href="#contact"
          onClick={() => setActivNav("contact")}
          className={`mx-1 mr-2 flex h-7 w-7 rounded-[50%]  bg-transparent px-1 py-1 text-lg text-white active:bg-inherit   active:bg-slate-100 active:text-black ${
            activNav === "contact" ? "bg-slate-100 text-black" : ""
          }`}
        >
          <RiServiceLine />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
