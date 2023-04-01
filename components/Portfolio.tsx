import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const arry = [
    {
      id: 1,
      img: "/blog.png",
      title: "Blog users",
      gitHub: "",
      liveDemo: "https://dulcet-maamoul-47bca0.netlify.app/",
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
      img: "/star-wars.png",
      title: "Star Wors",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 4,
      img: "/tic-tac-toe.png",
      title: "Tic tac toe",
      gitHub: "",
      liveDemo: "https://glistening-banoffee-03fe4d.netlify.app/",
    },
    {
      id: 5,
      img: "/quiz.png",
      title: "quiz",
      gitHub: "",
      liveDemo: "",
    },
    {
      id: 6,
      img: "/sticky-note.png",
      title: "sticky notes",
      gitHub: "",
      liveDemo:
        "https://641cbfccfdf68d0b352df8cf--effortless-kleicha-e46c19.netlify.app/",
    },
    {
      id: 6,
      img: "/shop.png",
      title: "sport shop",
      gitHub:
        "https://641dfb78129357007fecd674--bucolic-cupcake-0337d7.netlify.app/",
      liveDemo: "",
    },
  ];
  return (
    <div
      id="portfolio"
      className="z-1  relative h-auto    w-full    py-20 px-10 sm:px-32  "
    >
      <div className="m-1 text-center text-3xl font-extrabold text-white sm:m-5">
        My Portfolio
      </div>
      <div className="l grid  grid-cols-1    gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {arry.map((event) => {
          return (
            <div
              key={event.id}
              className="block justify-center rounded-xl bg-black p-2  transition delay-[0.5s] ease-in-out hover:scale-[105%]  "
            >
              <Image
                width={300}
                height={300}
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
                <Link
                  href={event.liveDemo}
                  className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-7 py-2  text-lg  text-teal-500 "
                >
                  Live Demo
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
