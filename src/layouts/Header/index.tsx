import Link from "next/link";

import Sidebar from "components/Sidebar";

import FormSearchMovie from "./FormSearchMovie";

export const Header = () => {
  return (
    <header className="from-gray-2 to-transparent bg-gradient-to-b relative text-white top-0 z-40 lg:sticky w-full">
      <nav className="w-full flex items-center justify-between px-3 py-5 lg:p-5">
        <div className="logo w-44 lg:w-fit">
          <Link href="/">
            <img src="/logo.svg" alt="logo site" />
          </Link>
        </div>
        <ul className="items-center text-lg gap-6 font-light hidden md:flex">
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
