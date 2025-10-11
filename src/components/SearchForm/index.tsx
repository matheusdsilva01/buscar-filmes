"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchFormProps {
  initialQuery?: string;
}

export const SearchForm = ({ initialQuery = "" }: SearchFormProps) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleClear = () => {
    setQuery("");
    router.push("/search");
  };

  return (
    <form action="/search" className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme que você está procurando..."
          className="w-full h-12 pl-11 pr-28 rounded-xl bg-gray-3/50 border border-gray-5 text-gray-12 transition-all
                    duration-200 placeholder:text-gray-10 focus:outline-none focus:border-red-9/50"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-22 top-1/2 -translate-y-1/2 p-1 rounded-full bg-gray-6 
                     flex items-center justify-center text-gray-11 hover:text-gray-12 transition-all hover:bg-gray-7"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        
        <button
          type="submit"
          disabled={!query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 py-1.5 px-3 rounded-lg bg-red-9 
                   text-white text-sm font-medium transition-all disabled:bg-gray-6 disabled:opacity-50 hover:bg-red-10"
        >
          Buscar
        </button>
    </form>
  );
};