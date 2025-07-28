"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Bars3Icon,
  ChevronDoubleDownIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";

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
          <XMarkIcon
            className="w-8"
            data-testid="button-close-nav"
            onClick={() => setIsNavOpen(false)}
          />
        ) : (
          <Bars3Icon
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
                  router.push(`/search/${query}`);
                }}
              >
                <input
                  id="input"
                  name="input"
                  className="w-[250px] py-1 pl-9 pr-2 font-light bg-black-bright text-white rounded-sm outline-none border-1 border-transparent bg-search-icon bg-no-repeat bg-[center_left_5px] hover:shadow-md focus:border-white"
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
          <li className="has-tooltip relative cursor-pointer flex items-center hover:underline">
            Busca recentes
            <ChevronDoubleDownIcon className="ml-1" width={24} height={24} />
            <span className="tooltip transition-all -bottom-6 mx-auto block h-auto w-max rounded border-2 border-zinc-900 bg-gray-100 text-sm text-black max-w-60 px-1">
              Em desenvolvimento...
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
