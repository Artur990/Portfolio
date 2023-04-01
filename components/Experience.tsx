import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const ary = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Redux",
    "TypeScript",
    "React Query",
    "Styled",
    "Components",
    "Tailwind CSS",
    "MaterialUI",
    "Unit testwith jest/React",
    "Testing Library",
    "E2E test Cypress",
    "Git",
  ];
  return (
    <section id="experience">
      <div className="m-5 text-center text-3xl font-extrabold text-white">
        My Experience
      </div>
      <div className="px-32 ">
        <div className="m-auto flex  h-80 w-2/3 flex-col flex-wrap rounded-2xl bg-black p-5 text-center text-white  opacity-60   ">
          {ary.map((e, i) => {
            return (
              <div
                key={i}
                className="m-2 flex items-center justify-items-center  p-1 align-middle"
              >
                <BsFillPatchCheckFill className="m-1 text-emerald-500" />
                <div className="m-1">{e}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
