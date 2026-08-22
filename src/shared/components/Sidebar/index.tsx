"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Home, Menu, Search, X } from "lucide-react";

export const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const inSearchPage = pathname.startsWith("/search");

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-11 hover:text-gray-12 p-2 transition-colors"
        aria-label="Abrir menu"
      >
        <Menu className="size-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`bg-gray-1 border-gray-5/30 fixed top-0 right-0 z-50 h-full w-72 transform border-l transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-gray-5/30 flex items-center justify-between border-b p-4">
          <span className="text-gray-12 text-sm font-medium">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-11 hover:text-gray-12 p-1 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="space-y-6 p-4">
          {!inSearchPage && (
            <form
              onSubmit={e => {
                e.preventDefault();
                if (query.trim()) {
                  router.push(`/search?query=${query}`);
                  setIsOpen(false);
                  setQuery("");
                }
              }}
              className="bg-gray-3/50 border-gray-5/50 focus-within:border-red-9/50 flex items-center overflow-hidden rounded-lg border transition-colors"
            >
              <input
                name="query"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="text-gray-12 placeholder:text-gray-10 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none"
                type="text"
                placeholder="Buscar filmes..."
              />
              <button
                type="submit"
                className="text-gray-10 hover:text-gray-12 px-3 py-2.5 transition-colors"
              >
                <Search className="size-4" />
              </button>
            </form>
          )}

          <nav className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-11 hover:text-gray-12 hover:bg-gray-3/50 flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
            >
              <Home className="size-4" />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className="text-gray-11 hover:text-gray-12 hover:bg-gray-3/50 flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
            >
              <Search className="size-4" />
              <span className="text-sm">Buscar</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
