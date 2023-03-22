import React from "react";

const Header = () => {
  return (
    <div className="flex  h-[50vh]   w-[100vw] justify-around p-10 align-middle">
      <section className="  h-28 w-[50%] ">
        <div className="w-[80%] text-start text-2xl font-bold text-white">
          Hi, I m Artur!
        </div>
        <div className="w-[80%] text-start text-sm text-white">
          Welcome to my humble home! I am a Frontend Developer, I develop
          programming skills, I provide modern and websites. I try to share my
          knowledge and thoughts with others here on my blog.
        </div>
        <div className="my-5 flex justify-start align-middle">
          <button className="m-1 rounded-lg bg-teal-500 px-10 py-2   text-lg ">
            Dwonload CV
          </button>
          <button className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-10 py-2  text-lg  text-teal-500 ">
            Lets Talk!
          </button>
        </div>
      </section>
      <section className="w-[40%]">
        <img
          src="/22.jpg"
          alt="photo"
          className="h-60 w-60 items-center  justify-center  rounded-full"
        />
      </section>
    </div>
  );
};

export default Header;
