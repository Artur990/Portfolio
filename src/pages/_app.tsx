import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GFS_Didot } from "next/font/google";

const gfs_Didot = GFS_Didot({
  subsets: ["greek"],
  weight: "400",
  variable: "--font-inter",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gfs_Didot.variable} font-sans`}>
      <Component {...pageProps} />;
    </main>
  );
}
