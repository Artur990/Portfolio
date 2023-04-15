import React from "react";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className=" h-auto min-h-[90vh] w-full">
      <div className="m-5 text-center text-3xl font-extrabold text-white ">
        About me
      </div>
      <div className="sm:px-26 mt-3 block h-auto   min-h-[50vh] w-full items-center justify-around p-10 px-20  align-middle md:flex md:px-32 ">
        <article className=" h-auto w-full md:w-[50%] ">
          {" "}
          <img
            src="rocketdab.png"
            alt="foto"
            className="degre m-auto h-96 w-96 items-center justify-center rounded-xl  md:h-[30rem] md:w-[30rem]"
          />
        </article>
        <article className=" mt-4 h-auto w-full md:w-[50%]">
          <div className=" flex justify-center">
            <div className="opacity-9 mx-6 my-2   h-32  w-1/2 rounded-md bg-black text-center text-white  opacity-60  md:w-1/4 ">
              <FaAward className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
              <div className="text-center text-xl  font-bold text-white">
                Experins
              </div>
              <div className="text-center  text-lg font-bold text-gray-300 ">
                2 Years Work
              </div>
            </div>
            <div className="opacity-9 mx-6 my-2  h-32 w-1/2 rounded-md bg-black text-center text-white  opacity-60  md:w-1/4 ">
              <FaAward className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
              <div className="text-center text-xl  font-bold text-white">
                Projects
              </div>
              <div className="text-center  text-lg font-bold text-gray-300 ">
                +10 projects
              </div>
            </div>
          </div>
          <p className="m-1 text-center text-xl font-bold text-white md:m-6">
            As a React/Frontend Developer, I am driven by my passion to create
            exceptional products that deliver an outstanding user experience.
            With an eye for detail, I strive for perfection in every project I
            undertake. I take pride in ensuring that my work is not only
            visually stunning but also functions seamlessly. When coding an
            application, I focus on enhancing user experience, optimizing
            performance, and maintaining code clarity. My insatiable curiosity
            drives me to constantly explore new technologies and techniques,
            enabling me to learn quickly and adapt to any challenge that comes
            my way. I thrive in collaborative environments, enjoy meeting new
            people, and take great pleasure in helping others.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
