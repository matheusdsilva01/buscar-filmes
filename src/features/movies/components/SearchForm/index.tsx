"use client";

import { useState } from "react";

import { Search, X } from "lucide-react";
import { useNavigation } from "shared/hooks";

interface SearchFormProps {
  initialQuery?: string;
}

export const SearchForm = ({ initialQuery = "" }: SearchFormProps) => {
  const [query, setQuery] = useState(initialQuery);
  const { goToSearch, clearSearch } = useNavigation();

  const handleClear = () => {
    setQuery("");
    clearSearch();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      goToSearch({ query });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-white" />
      <input
        type="text"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite o nome do filme que você está procurando..."
        className="bg-gray-3/50 border-gray-5 text-gray-12 placeholder:text-gray-10 focus:border-red-9/50 h-12 w-full rounded-xl border pr-28 pl-11 transition-all duration-200 focus:outline-none"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-6 text-gray-11 hover:text-gray-12 hover:bg-gray-7 absolute top-1/2 right-22 flex -translate-y-1/2 items-center justify-center rounded-full p-1 transition-all"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      <button
        type="submit"
        disabled={!query.trim()}
        className="bg-red-9 disabled:bg-gray-6 hover:bg-red-10 absolute top-1/2 right-2 -translate-y-1/2 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-all disabled:opacity-50"
      >
        Buscar
      </button>
    </form>
  );
};
