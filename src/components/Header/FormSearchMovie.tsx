"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const FormSearchMovie = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const inSearchPage = pathname.includes("/search");

  return (
    <>
      {!inSearchPage && (
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
              className="max-w-[250px] font-light bg-black-bright text-white rounded-md outline-none border-1 border-transparent pl-9 pr-2 bg-search-icon bg-no-repeat bg-[length:14px] bg-[center_left_8px]"
              type="text"
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar..."
            />
          </form>
        </li>
      )}
    </>
  );
};

export default FormSearchMovie;
