import React from "react";

import { Skeleton } from "components/FilmResult/Skeleton";
import { Pagination } from "components/Pagination";

const Loading = () => {
  const { page, totalPages, query } = {
    page: 1,
    totalPages: 1,
    query: ""
  };

  return (
    <>
      <div className="w-full px-8 mb-8 mt-8">
        <input
          type="text"
          disabled
          defaultValue={"...."}
          placeholder="Pesquise um filme"
          className="w-full p-2 rounded-lg bg-black-bright text-white shadow-slate-700 shadow-[0_0_2px]"
        />
      </div>
      <Pagination page={Number(page)} totalPages={totalPages} query={query} />
      <section className="flex flex-col gap-y-5 px-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </section>
      <Pagination page={Number(page)} totalPages={totalPages} query={query} />
    </>
  );
};

export default Loading;
