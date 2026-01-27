import { ReactNode } from "react";

import { Footer } from "components/ui/Footer";
import { Header } from "components/ui/Header";

type Props = {
  children: ReactNode;
};

export const Home = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
