import Image from "next/image";
import React, { useState } from "react";
import { FaAward } from "react-icons/fa";
import Paragraph from "./ui/Paragraph";
import { motion } from "framer-motion";
export const About = () => {
  const [isActive, setIsActive] = useState(false);

  const onEnterViewport = () => {
    setIsActive(true);
  };

  const onExitViewport = () => {
    setIsActive(false);
  };

  return (
    <section id="about" className="my-32 h-auto w-full min-w-[400px] ">
      <h1 className="my-10 text-center text-5xl  font-extrabold text-white md:text-7xl">
        About me
      </h1>
      <div className=" flex h-full flex-col items-center justify-around px-4 md:p-0 lg:flex-row xl:px-24">
        <div className="h-full w-full md:w-[80%]">
          <Image
            width={400}
            height={400}
            src="/rocketdab.png"
            alt="foto"
            className="mx-auto h-96 w-96 rounded-xl md:h-[30rem] md:w-[30rem]"
          />
        </div>
        <div className="mt-4 flex h-full w-full flex-col justify-between md:mt-0">
          <div className="flex justify-center ">
            <div className="mx-2 h-52 w-1/3 rounded-3xl bg-black opacity-60 lg:mx-10 lg:h-52 lg:min-w-[200px] lg:p-2 lg:px-4 lg:py-2">
              <FaAward className="m-2 mx-auto h-9 w-9 text-base text-teal-500" />
              <h3 className="text-center text-2xl font-bold text-white">
                Experience
              </h3>
              <h4 className="text-center text-xl font-bold text-gray-300">
                2 Years Work
              </h4>
            </div>
            <div className="mx-2 h-52 w-1/3 rounded-3xl bg-black opacity-60 lg:mx-10 lg:h-52 lg:min-w-[200px] lg:p-2 lg:px-4 lg:py-2">
              <FaAward className="mx-auto my-2 h-9   w-9 text-base text-teal-500" />
              <h3 className="text-center text-xl font-bold text-white">
                Projects
              </h3>
              <h4 className="text-center text-xl font-bold text-gray-300">
                +10 projects
              </h4>
            </div>
          </div>
          <Paragraph className="m-auto p-2 text-center text-xl font-bold text-white md:m-6 md:text-left">
            {/* <p className="w-full max-w-xl lg:text-center  "> */}
            As a React/Frontend Developer, my passion for creating top-tier
            products drives me. I focus on detail, strive for perfection, and
            ensure my work is visually impressive and flawless in operation. In
            coding, I prioritize user experience, performance optimization, and
            code clarity. My curiosity pushes me to explore new technologies,
            quickly learn, and adapt to challenges. I thrive in team
            environments and enjoy helping others.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
