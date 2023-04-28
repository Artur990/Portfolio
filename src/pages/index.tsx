import Head from "next/head";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { MyStack } from "../../components/MyStack";
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
      <div>
        <div className="relative">
          <Header />
          <About />
          <MyStack />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
