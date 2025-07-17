import { NextPage } from "next";
import Link from "next/link";

import Sidebar from "components/Sidebar";

import FormSearchMovie from "./FormSearchMovie";

const Header: NextPage = () => {
  return (
    <header className="bg-black shadow-[0_1px_5px] shadow-slate-700 text-white sticky top-0 z-40 lg:relative">
      <nav className="w-full flex items-center justify-between px-3 py-5 lg:p-[19px]">
        <div className="logo w-44 lg:w-fit">
          <Link href="/">
            <img src="/logo.svg" alt="logo site" />
          </Link>
        </div>
        <ul className="DESKTOP-MENU items-center text-lg gap-6 font-light hidden lg:flex">
          <FormSearchMovie />
          <Link href="/">
            <li className="cursor-pointer hover:underline">Home</li>
          </Link>
        </ul>
        <Sidebar />
      </nav>
    </header>
  );
};

export default Header;
