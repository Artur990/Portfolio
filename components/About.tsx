import Image from "next/image";
import React from "react";
import { FaAward } from "react-icons/fa";
export const About = () => {
  return (
    <section
      id="about"
      className="sm:min-h-[90vh]min-w-[400px] h-auto min-h-screen w-full "
    >
      <h1 className="m-5 text-center text-3xl font-extrabold text-white">
        About me
      </h1>
      <div className="sm:px-26 flex h-full flex-col items-center justify-around p-10 md:flex-row md:p-0">
        <article className="h-full w-full md:w-[50%]">
          <Image
            width={400}
            height={400}
            src="/rocketdab.png"
            alt="foto"
            className="mx-auto h-96 w-96 rounded-xl md:h-[30rem] md:w-[30rem]"
          />
        </article>
        <article className="mt-4 flex h-full w-full flex-col justify-between md:mt-0 md:w-[50%]">
          <div className="flex justify-center ">
            <div className="md:mx- mx-6 my-2 h-32 w-1/2 rounded-md bg-black opacity-60 md:w-auto md:p-2 lg:px-4 lg:py-2">
              <FaAward className="mx-auto my-2 h-7 w-7 text-base text-teal-500" />
              <h3 className="text-center text-xl font-bold text-white">
                Experience
              </h3>
              <h4 className="text-center text-lg font-bold text-gray-300">
                2 Years Work
              </h4>
            </div>
            <div className="mx-6 my-2 h-32 w-1/2 rounded-md bg-black opacity-60  md:w-auto md:p-2 lg:p-4 lg:py-2">
              <FaAward className="mx-auto my-2 h-7 w-7 text-base text-teal-500" />
              <h3 className="text-center text-xl font-bold text-white">
                Projects
              </h3>
              <h4 className="text-center text-lg font-bold text-gray-300">
                +10 projects
              </h4>
            </div>
          </div>
          <p className="m-1 text-center text-xl font-bold text-white md:m-6 md:text-left">
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
