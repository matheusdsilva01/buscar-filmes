"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const FormSearchMovie = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const inHomePage = new RegExp("/search/*/").test(pathname);

  return (
    <>
      {!inHomePage && (
        <li>
          <form
            action="submit"
            onSubmit={e => {
              e.preventDefault();
              router.push(`/search/${query}`);
            }}
          >
            <label
              htmlFor="input"
              className="bg-search-icon bg-no-repeat bg-bottom cursor-pointer"
            >
              <input
                id="input"
                name="input"
                className="max-w-[250px] py-1 text-[16px] font-light w-10 opacity-0 bg-black-bright text-white rounded-sm outline-none border-1 border-transparent focus:border-white focus:w-auto focus:px-9 focus:opacity-100 bg-search-icon bg-no-repeat bg-[center_left_5px]"
                type="text"
                onChange={e => setQuery(e.target.value)}
                placeholder="Busca..."
              />
            </label>
          </form>
        </li>
      )}
    </>
  );
};

export default FormSearchMovie;
