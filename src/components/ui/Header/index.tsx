"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sidebar } from "components/shared/Sidebar";
import { Search } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();

  const inSearchPage = pathname.includes("/search");

  return (
    <header className="from-gray-2 to-transparent bg-linear-to-b relative text-white top-0 z-40 lg:sticky w-full">
      <nav className="w-full flex items-center justify-between px-3 py-5 lg:p-5">
        <div className="logo w-44 lg:w-fit">
          <Link href="/">
            <img src="/logo.svg" alt="logo site" />
          </Link>
        </div>
        <ul className="items-center text-lg gap-6 font-light hidden md:flex">
          {!inSearchPage && (
            <li>
              <form
                action="/search"
                className="flex gap-2 bg-zinc-800 overflow-hidden rounded-md"
              >
                <input
                  id="input"
                  name="query"
                  className="max-w-[180px] font-light bg-transparent text-white outline-hidden border-1 border-transparent px-2"
                  type="search"
                  required
                  placeholder="Buscar..."
                />
                <button type="submit" className="bg-black-bright pl-2 px-1">
                  <Search className="h-5 w-5 my-auto text-white" />
                </button>
              </form>
            </li>
          )}
          <Link href="/">
            <li className="cursor-pointer hover:underline">Home</li>
          </Link>
        </ul>
        <Sidebar />
      </nav>
    </header>
  );
};
