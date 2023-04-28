import Image from "next/image";
import React from "react";

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
      className="flex h-auto min-h-screen w-full min-w-[400px] items-center justify-center px-4 lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col md:flex-row">
        <section className="my-auto px-4 md:w-1/2 md:px-0">
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-left md:text-5xl">
            Hi, I&rsquo;m Artur!
          </h2>
          <p className="mb-8 text-center text-lg text-white md:text-left md:text-xl">
            I create modern websites and share my knowledge. I follow industry
            trends to create great websites. Thanks for visiting my portfolio!
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a href="CV-ArturG..pdf" download="CV-ArturG..pdf">
              <button className="rounded-lg bg-teal-500 px-8 py-2 text-lg text-gray-800 hover:bg-teal-700">
                Download CV
              </button>
            </a>
            <button
              onClick={handleClickScrollContact}
              className="rounded-lg border-2 border-teal-500 bg-white px-8  py-2 text-lg text-gray-800 hover:bg-gray-400"
            >
              Lets Talk!
            </button>
          </div>
        </section>
        <section className="my-auto px-4 md:w-1/2 md:px-0">
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
        </section>
      </div>
    </header>
  );
};
