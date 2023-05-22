import React from "react";
import { stackArr } from "@/data/stack";
import { BsFillPatchCheckFill } from "react-icons/bs";

export const MyStack = () => {
  // Create a list of unique categories
  const categories = Array.from(new Set(stackArr.map((tech) => tech.category)));

  return (
    <section id="myStack" className="my-3 min-w-[400px]">
      <h2 className="my-10 text-center text-5xl font-extrabold text-white md:text-7xl">
        My Stack
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          // For each category, filter out the technologies that belong to it
          const technologies = stackArr.filter(
            (tech) => tech.category === category
          );
          return (
            <div
              key={category}
              className="m-5 overflow-hidden rounded  shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-white">
                  {category}
                </div>
                <ul className="list-none bg-black  text-base text-gray-700 opacity-60">
                  {technologies.map((tech) => (
                    <li key={tech.name} className="flex items-center">
                      <BsFillPatchCheckFill className="m-1 text-emerald-500" />
                      <p className="m-1 text-white">{tech.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
