import React from "react";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <div className="m-3 h-auto min-h-[50vh] w-full">
      <div className="text-center text-2xl font-bold text-white ">About me</div>
      <div className="flex  h-[50vh]   w-[100vw] justify-around p-10 align-middle">
        <section className=" h-auto w-[50%] ">
          {" "}
          <img
            src="/22.jpg"
            alt="foto"
            className="m-auto h-80 w-80 items-center  justify-center  rounded-xl"
          />
        </section>
        <section className=" h-auto w-[50%] ">
          <div className="m-0 flex justify-between">
            <div className="m-auto h-28 w-1/4 rounded-md bg-teal-500 text-center text-white">
              <FaAward className="text-center" />
              <div className="text-center text-base font-bold text-white ">
                Experins
              </div>
              <div className="text-center text-sm font-bold text-white ">
                2 Years Work
              </div>
            </div>
            <div className="m-auto h-28 w-1/4 rounded-md  bg-teal-500">
              <FaAward />
              Projects
              <div>+ 10 projects</div>
            </div>
            <div className="m-auto h-28 w-1/4 rounded-md bg-teal-500">
              Experins
              <FaAward />
            </div>
          </div>
          <p className="m-6 text-left text-xl font-bold text-white">
            Young, self-motivated React/Frontend Developer truly enthusiastic
            about providing products with great user experience. I pay attention
            to details because, I like when something I do is working perfectly
            and looking amazing. When I writing code for application, I pay a
            lot of attention to code clarity, user experience and performance. I
            find learning new thing fascination and because of that - can learn
            fast. I like challenges, I like meeting new people and helping
            people.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
