"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Search } from "lucide-react";

import { Sidebar } from "../Sidebar";

export const Header = () => {
  const pathname = usePathname();
  const inSearchPage = pathname.startsWith("/search");

  return (
    <header className="bg-gray-1/80 border-gray-5/30 top-0 z-40 w-full border-b text-white backdrop-blur-md lg:sticky">
      <nav className="flex w-full items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="logo site"
            className="h-8"
            width={200}
            height={32}
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {!inSearchPage && (
            <form
              action="/search"
              className="bg-gray-3/50 border-gray-5/50 focus-within:border-red-9/50 flex items-center overflow-hidden rounded-lg border transition-colors"
            >
              <input
                name="query"
                className="text-gray-12 placeholder:text-gray-10 w-44 bg-transparent px-3 py-2 text-sm outline-none"
                type="search"
                required
                placeholder="Buscar filmes..."
              />
              <button
                type="submit"
                className="text-gray-10 hover:text-gray-12 px-3 py-2 transition-colors"
              >
                <Search className="size-4" />
              </button>
            </form>
          )}
          <Link
            href="/"
            className="text-gray-11 hover:text-gray-12 flex items-center gap-2 text-sm transition-colors"
          >
            <Home className="size-4" />
            Home
          </Link>
        </div>

        <Sidebar />
      </nav>
    </header>
  );
};
