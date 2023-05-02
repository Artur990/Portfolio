import Image from "next/image";
import React from "react";
import Article from "./Article";
import { portfolioArr } from "@/data/potfolioArr";
export const TPortfolio = typeof portfolioArr;
export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="z-1 h-auto w-full min-w-[400px] py-10 px-4 md:py-10 md:px-4 lg:px-32"
    >
      <h2 className="my-5 text-center  text-3xl font-extrabold text-white">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolioArr.map((event) => {
          return <Article key={event.id} {...event} />;
        })}
      </div>
    </section>
  );
};
