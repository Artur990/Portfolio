import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const arry = [
    {
      id: 1,
      img: "/blog.png",
      title: "Blog users",
      gitHub: "https://github.com/Artur990/Users-Blog",
      liveDemo:
        "https://6439a3743612a82de3f1ad3e--soft-kleicha-90e6b3.netlify.app/",
    },
    {
      id: 2,
      img: "/website-for-the-company.png",
      title: "Company gallery",
      gitHub: "https://github.com/Artur990/Company-Gallery",
      liveDemo: "https://company-1.vercel.app/",
    },
    {
      id: 3,
      img: "/star-wars.png",
      title: "Star wars",
      gitHub: "https://github.com/Artur990/Star-Wars",
      liveDemo: "https://star-wars-mimdek8yl-artur990.vercel.app/",
    },
    {
      id: 4,
      img: "/tic-tac-toe.png",
      title: "Tic tac toe",
      gitHub: "https://github.com/Artur990/Tic-Tac-Toe",
      liveDemo:
        "https://643983e5793beb0dbbedf1aa--poetic-dodol-29b72a.netlify.app/",
    },
    {
      id: 5,
      img: "/quiz.png",
      title: "Quiz",
      gitHub: "https://github.com/Artur990/Quiz-game",
      liveDemo: "https://quiz-onho.vercel.app/",
    },
    {
      id: 6,
      img: "/sticky-note.png",
      title: "Sticky notes",
      gitHub: "https://github.com/Artur990/sticky-notes",
      liveDemo:
        "https://642c1c6b5a5e10181b842a16--keen-lolly-54657d.netlify.app/",
    },
    {
      id: 7,
      img: "/shop.png",
      title: "Sport shop",
      gitHub: "https://github.com/Artur990/Sport-Shop",
      liveDemo: "https://bucolic-cupcake-0337d7.netlify.app",
    },
  ];
  return (
    <div
      id="portfolio"
      className="z-1  relative h-auto    w-full    py-20 px-5  md:px-24  lg:px-32 "
    >
      <div className="m-1 text-center text-3xl font-extrabold text-white md:m-5">
        My Portfolio
      </div>
      <div className=" grid  grid-cols-1    gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="my-5 flex justify-center align-middle md:my-2">
                <Link
                  href={event.gitHub}
                  className="m-1 rounded-lg bg-teal-500 px-7 py-1  text-lg  md:px-2 md:py-0  md:text-lg lg:py-2 xl:py-2 xl:px-10 xl:text-xl xl:font-bold"
                >
                  GitHub
                </Link>
                <Link
                  href={event.liveDemo}
                  className="m-1 rounded-lg border-2  border-solid border-teal-500  bg-white px-7 py-1 text-lg text-teal-500  md:px-2 md:py-0 lg:py-2 xl:py-2 xl:px-10  xl:text-xl xl:font-bold "
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
