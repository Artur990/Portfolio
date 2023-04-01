import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="block h-auto min-h-[90vh]  w-full   items-center justify-center p-10 align-middle sm:flex sm:px-32"
    >
      <div className=" my-auto  w-full sm:h-[100] sm:w-[40%] ">
        <div className="sm-w-[80%] w-full text-center text-5xl font-bold text-white sm:text-start">
          Hi, I&apos;m Artur!
        </div>
        <div className="w-full text-center text-xl text-white sm:w-[80%] sm:text-start">
          Welcome to my humble home! I am a Frontend Developer, I develop
          programming skills, I provide modern and websites. I try to share my
          knowledge and thoughts with others here on my blog.
        </div>
        <div className="my-0 flex justify-start align-middle sm:my-5">
          <button className="m-1 rounded-lg bg-teal-500 px-5 py-1 text-lg sm:py-3   sm:px-14 ">
            Dwonload CV
          </button>
          <button className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-14 py-2  text-lg  text-teal-500 ">
            Lets Talk!
          </button>
        </div>
      </div>
      <div className=" my-auto h-[100] w-full sm:w-[40%] ">
        <Image
          width={384}
          height={384}
          src="/hero.webp"
          alt="photo"
          className="h-96 w-auto items-center  justify-center  rounded-full"
        />
      </div>
    </section>
  );
};

export default Header;
