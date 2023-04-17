import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/Nav";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Portfolio } from "../../components/Portfolio";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My personal portfolio " />
        <meta property="og:title" content="Personal portfolio Artur Grzębski" />
        <link rel="icon" href="/hero.webp" />
      </Head>
      <div className="h-auto w-auto">
        <Image
          width={400}
          height={400}
          alt="bachGround"
          src="/background.png"
          className=" fixed z-0 h-full w-full "
        />
        <div className="relative">
          <Nav />
          <Header />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
