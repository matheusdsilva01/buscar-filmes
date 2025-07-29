import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./index.css";

import Footer from "components/Footer/Footer";
import { Header } from "layouts/Header";

export const metadata: Metadata = {
  title: "Buscar filmes",
  description: "Projeto pessoal para busca de filmes",
  keywords: "filmes, busca, filmes online, filmes grátis"
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400"],
  variable: "--font-poppins"
});

export default function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
