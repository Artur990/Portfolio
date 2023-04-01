import Image from "next/image";
import React from "react";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className=" h-auto min-h-[90vh] w-full">
      <div className="m-5 text-center text-3xl font-extrabold text-white ">
        About me
      </div>
      <div className="mt-3 block h-auto min-h-[50vh]   w-full items-center justify-around p-10 align-middle sm:flex  sm:px-32">
        <article className=" h-auto w-full sm:w-[50%] ">
          {" "}
          <Image
            width={320}
            height={320}
            src="/22.jpg"
            alt="foto"
            className="degre sm:h-120 sm:w-120 m-auto h-80 w-80 items-center  justify-center rounded-xl"
          />
        </article>
        <article className=" mt-4 h-auto w-full sm:w-[50%]">
          <div className=" flex justify-center">
            <div className="opacity-9 mx-6 my-2   h-32  w-1/2 rounded-md bg-black text-center text-white  opacity-60  sm:w-1/4 ">
              <FaAward className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
              <div className="text-center text-xl  font-bold text-white">
                Experins
              </div>
              <div className="text-center  text-lg font-bold text-gray-300 ">
                2 Years Work
              </div>
            </div>
            <div className="opacity-9 mx-6 my-2  h-32 w-1/2 rounded-md bg-black text-center text-white  opacity-60  sm:w-1/4 ">
              <FaAward className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
              <div className="text-center text-xl  font-bold text-white">
                Projects
              </div>
              <div className="text-center  text-lg font-bold text-gray-300 ">
                +10 projects
              </div>
            </div>
          </div>
          <p className="m-1 text-center text-xl font-bold text-white sm:m-6">
            Young, self-motivated React/Frontend Developer truly enthusiastic
            about providing products with great user experience. I pay attention
            to details because, I like when something I do is working perfectly
            and looking amazing. When I writing code for application, I pay a
            lot of attention to code clarity, user experience and performance. I
            find learning new thing fascination and because of that - can learn
            fast. I like challenges, I like meeting new people and helping
            people.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
