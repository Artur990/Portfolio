import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="my-3 h-auto min-h-[50vh] w-full">
      <div className="m-5 text-center text-3xl font-extrabold text-white ">
        Contact me
      </div>
      <div className="block justify-center  align-middle md:flex">
        <div className="m-auto h-44  w-4/5 rounded-2xl  bg-black text-center text-white opacity-60  md:m-2  md:w-1/4 ">
          <AiOutlineMail className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <div className="text-center text-2xl  font-bold text-white">
            Email
          </div>
          <div className=" text-center text-lg font-bold text-gray-300">
            artur.grzebski69@gmail.com
          </div>
        </div>
        <div className="m-auto h-44 w-4/5 rounded-2xl  bg-black text-center text-white opacity-60  md:m-2  md:w-1/4 ">
          <AiOutlinePhone className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <div className="text-center text-2xl  font-bold text-white">
            Phone
          </div>
          <div className=" text-center text-lg font-bold text-gray-300">
            505-970-141
          </div>
        </div>

        <div className="m-auto h-44  w-4/5 rounded-2xl bg-black text-center text-white opacity-60  md:m-2  md:w-1/4 ">
          <AiFillGithub className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <div className="m-auto text-center text-2xl  font-bold text-white">
            GitHub
          </div>
          <div className="m-auto text-center  text-lg font-bold text-gray-300">
            GithubArtur990
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
