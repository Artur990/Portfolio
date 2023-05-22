import Image from "next/image";
import React from "react";
import Paragraph from "./ui/Paragraph";

export const Header = () => {
  const handleClickScrollContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className="min-h -auto flex h-auto w-full min-w-[400px] items-center justify-center py-24 px-4 lg:py-36 lg:px-16 "
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col lg:flex-row">
        <div className="my-auto px-4 lg:w-1/2 lg:px-0">
          <h1 className="mb-4 text-center text-5xl font-bold text-white md:text-7xl lg:text-left">
            Hi, I&rsquo;m Artur!
          </h1>
          <Paragraph className="mx-auto max-w-xl text-center   lg:text-left">
            I create modern websites and share my knowledge. I follow industry
            trends to create great websites. Thanks for visiting my portfolio!
          </Paragraph>
          <div className="flex justify-center space-x-4 lg:justify-start">
            <a href="CV-ArturG..pdf" download="CV-ArturG..pdf">
              <button className="rounded-lg bg-teal-500 px-8 py-4 text-xl text-gray-800 hover:bg-teal-700 md:text-2xl">
                Download CV
              </button>
            </a>
            <button
              onClick={handleClickScrollContact}
              className="rounded-lg border-2 border-teal-500 bg-white px-8  py-4 text-lg text-gray-800 hover:bg-gray-400"
            >
              Lets Talk!
            </button>
          </div>
        </div>
        <div className="mx-auto px-4 md:w-1/2 md:px-0">
          <div className="flex justify-center">
            <Image
              priority
              width={384}
              height={384}
              src="/hero.webp"
              alt="photo"
              className="h-64 w-auto rounded-full md:h-96"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
