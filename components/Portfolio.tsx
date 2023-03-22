import React from "react";

const Portfolio = () => {
  const arry = [
    {
      id: 1,
      img: "/rocketdab.png",
      title: "Blog users",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 2,
      img: "/rocketdab.png",
      title: "CurrencyConvert",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 3,
      img: "/rocketdab.png",
      title: "Star Wors",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 4,
      img: "/rocketdab.png",
      title: "Blog users",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 5,
      img: "/rocketdab.png",
      title: "CurrencyConvert",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 6,
      img: "/rocketdab.png",
      title: "Star Wors",
      gitHub: "",
      liveDemo: "",
    },
  ];
  return (
    <div className="z-1 fixed relative grid h-auto   min-h-[70vh] w-full grid-cols-3  gap-4 px-40  py-20   ">
      {arry.map((event) => {
        return (
          <div
            key={event.id}
            className="block justify-center rounded-xl bg-black p-2 opacity-60 transition delay-75 ease-in-out hover:scale-105 "
          >
            <img
              src={event.img}
              alt=""
              className="m-auto my-4 h-[60%] w-[90%] 	snap-center justify-center rounded-md"
            />
            <div className="my-4 text-center text-xl font-bold text-white">
              {event.title}
            </div>
            <div className="my-5 flex justify-center align-middle">
              <button className="m-1 rounded-lg bg-teal-500 px-7 py-2   text-lg ">
                GitHub
              </button>
              <button className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-7 py-2  text-lg  text-teal-500 ">
                Live Demo
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
