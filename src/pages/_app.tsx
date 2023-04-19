import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GFS_Didot } from "next/font/google";
import Layout from "../../components/Layout";

const gfs_Didot = GFS_Didot({
  subsets: ["greek"],
  weight: "400",
  variable: "--font-inter",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </main>
  );
}
