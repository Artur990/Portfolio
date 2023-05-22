import React from "react";
import { Nav } from "../../components/Nav";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Image
        inlist={true}
        width={400}
        height={400}
        alt="bachGround"
        src="/background1.jpg"
        className=" fixed z-0 h-full w-full "
      />
      <Nav />
      <main className=" mx-2 font-poppins lg:mx-10 xl:mx-16 2xl:mx-24">
        {children}
      </main>
    </div>
  );
}
