import type { AppProps } from "next/app";
import "../styles/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { RecentsMoviesContext } from "../context/recents";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Project personal for films searches"
        />
        <title>Buscar filmes</title>
      </Head>
      <RecentsMoviesContext>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RecentsMoviesContext>
    </>
  );
}
