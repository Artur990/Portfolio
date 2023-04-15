import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="h-auto w-auto">
        <Image
          width={400}
          height={400}
          alt="bachGround"
          src="/background.png"
          className=" fixed z-0 h-[200vh] w-full "
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
