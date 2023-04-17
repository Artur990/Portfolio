import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const Contact = () => {
  return (
    <section id="contact" className="my-3 h-auto min-h-[50vh] w-full p-2">
      <h2 className="m-5 text-center text-2xl font-extrabold text-white">
        Contact me
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiOutlineMail className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h3 className="text-2xl font-bold text-white">Email</h3>
          <h4 className="text-lg font-bold text-gray-300">
            artur.grzebski@icloud.com
          </h4>
        </article>
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiOutlinePhone className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h3 className="text-2xl font-bold text-white">Phone</h3>
          <h4 className="text-lg font-bold text-gray-300">505-970-141</h4>
        </article>
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiFillGithub className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h3 className="text-2xl font-bold text-white">GitHub</h3>
          <h4 className="text-lg font-bold text-gray-300">GithubArtur990</h4>
        </article>
      </div>
    </section>
  );
};
