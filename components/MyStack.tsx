import React from "react";
import { v4 as uuidv4 } from "uuid";

import { BsFillPatchCheckFill } from "react-icons/bs";

export const MyStack = () => {
  const id = uuidv4();

  const ary = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Redux",
    "TypeScript",
    "React Query",
    "Styled Components",
    "Tailwind CSS",
    "MaterialUI",
    "Unit test jest/React",
    "Testing Library",
    "E2E test Cypress",
    "Git",
  ];
  return (
    <section id="myStack" className="my-3 min-w-[400px]">
      <h2 className="m-5 text-center text-3xl font-extrabold text-white">
        My Stack
      </h2>
      <div className="sm:px-26 px-20 md:px-32 ">
        <div className="  m-auto flex  h-[57rem] w-[100%] flex-col  flex-wrap overflow-hidden  rounded-2xl bg-black p-5 text-center text-white opacity-60 sm:h-[30rem] md:h-[25rem]   lg:w-[90%]   ">
          {ary.map((e) => {
            return (
              <article
                key={id}
                className="m-2 flex items-center justify-items-center  p-1 align-middle"
              >
                <BsFillPatchCheckFill className="m-1 text-emerald-500" />
                <h4 className="m-1">{e}</h4>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
