"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { FilterOption } from "services/TMDB";

export const TabsFilterMovie = () => {
  const searchParams = useSearchParams();
  const selectedFilter = (searchParams.get("query") ||
    "popular") as FilterOption;

  const options = [
    { value: "popular", label: "Populares" },
    { value: "trending", label: "Tendências" },
    { value: "top_rated", label: "Melhor avaliados" }
  ];

  return (
    <div className="container mx-auto mt-6">
      <section className="flex gap-4 border-b border-gray-400 text-white mb-4">
        {options.map(option => (
          <Link
            href={`?query=${option.value}`}
            scroll={false}
            key={option.value}
            data-selected={option.value === selectedFilter}
            className="px-5 py-3 rounded-t-md bg-zinc-600 hover:bg-zinc-700  data-[selected='true']:border-b-red-600 data-[selected='true']:border-b-2 data-[selected='true']:bg-zinc-900 data-[selected='true']:hover:bg-zinc-800 transition-colors cursor-pointer data-[selected='true']:cursor-default"
          >
            {option.label}
          </Link>
        ))}
      </section>
    </div>
  );
};
