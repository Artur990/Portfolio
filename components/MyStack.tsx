import React from "react";
import { v4 as uuidv4 } from "uuid";

import Stack from "./Stack";
import { stackArr } from "@/data/stack";

export const MyStack = () => {
  const id = uuidv4();

  return (
    <section id="myStack" className="my-3 min-w-[400px]">
      <h2 className="m-5 text-center text-3xl font-extrabold text-white">
        My Stack
      </h2>
      <div className="sm:px-26 px-20 md:px-32 ">
        <div className="  m-auto flex  h-[57rem] w-[100%] flex-col  flex-wrap overflow-hidden  rounded-2xl bg-black p-5 text-center text-white opacity-60 sm:h-[30rem] md:h-[25rem]   lg:w-[90%]   ">
          {stackArr.map((e) => (
            <Stack key={id} name={e} />
          ))}
        </div>
      </div>
    </section>
  );
};
