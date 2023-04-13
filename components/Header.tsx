import Image from "next/image";
import React from "react";

const Header = () => {
  const handleClickScrollContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  function handleDownload() {
    fetch("/public/CV.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }

  return (
    <section
      id="header"
      className="m-15 block h-auto  min-h-[90vh]   w-full items-center justify-center p-5 align-middle  md:flex lg:p-5 lg:px-32"
    >
      <div className=" my-auto  w-full md:h-[100] md:w-[40%] ">
        <div className="md-w-[80%] w-full text-center text-5xl font-bold text-white md:text-start">
          Hi, I&apos;m Artur!
        </div>
        <div className="w-full text-center text-xl text-white md:w-[80%] md:text-start">
          Welcome to my portfolio! I am a Frontend Developer, I develop
          programming skills, I provide modern and websites. I try to share my
          knowledge.
        </div>
        <div className="my-0 flex justify-center align-middle md:my-5 md:justify-start">
          {/* <a href="/public/CV.pdf" download> */}
          <button
            onClick={handleDownload}
            className="m-1 rounded-lg bg-teal-500 px-5 py-1 text-lg md:py-3   md:px-14 "
          >
            Dwonload CV
          </button>
          {/* </a> */}
          <button
            onClick={handleClickScrollContact}
            className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-14 py-2  text-lg  text-teal-500 "
          >
            Lets Talk!
          </button>
        </div>
      </div>
      <div className=" my-auto h-[100] w-full md:w-[40%] ">
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
