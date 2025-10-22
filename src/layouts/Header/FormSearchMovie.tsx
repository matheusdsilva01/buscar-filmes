"use client";
import { usePathname } from "next/navigation";

import { Search } from "lucide-react";

const FormSearchMovie = () => {
  const pathname = usePathname();

  const inSearchPage = pathname.includes("/search");

  return (
    <>
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
    </>
  );
};

export default FormSearchMovie;
