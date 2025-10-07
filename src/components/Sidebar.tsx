"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const inHomePage = new RegExp("/search/*/").test(pathname);

  return (
    <section className="MOBILE-MENU flex lg:hidden">
      <div>
        {isNavOpen ? (
          <X
            className="w-8"
            data-testid="button-close-nav"
            onClick={() => setIsNavOpen(false)}
          />
        ) : (
          <Menu
            className="w-8"
            data-testid="button-open-nav"
            onClick={() => setIsNavOpen(prev => !prev)}
          />
        )}
      </div>
      <div
        className={
          isNavOpen
            ? "flex absolute top-16 right-0 bg-black w-full h-screen z-50"
            : "hidden"
        }
      >
        <ul className="flex m-auto flex-col gap-10 items-center ">
          {!inHomePage && (
            <li>
              <form
                action="submit"
                onSubmit={e => {
                  e.preventDefault();
                  router.push(`/search?query=${query}`);
                  setIsNavOpen(false);
                }}
              >
                <input
                  id="query"
                  name="query"
                  value={query}
                  className="w-[250px] py-1 px-2 text-black font-light bg-black-bright rounded-sm outline-none border-1 border-transparent hover:shadow-md focus:border-white"
                  type="text"
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Busca..."
                />
              </form>
            </li>
          )}
          <Link href="/">
            <li className="cursor-pointer hover:underline">Home</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
