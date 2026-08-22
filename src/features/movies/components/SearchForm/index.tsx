"use client"

import { useState } from "react"

import { Search, X } from "lucide-react"

import { useNavigation } from "@/shared/hooks"

interface SearchFormProps {
  initialQuery?: string
}

export const SearchForm = ({ initialQuery = "" }: SearchFormProps) => {
  const [query, setQuery] = useState(initialQuery)
  const { goToSearch, clearSearch } = useNavigation()

  const handleClear = () => {
    setQuery("")
    clearSearch()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      goToSearch({ query })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
      <input
        type="text"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite o nome do filme que você está procurando..."
        className="h-12 w-full rounded-xl border border-gray-5 bg-gray-3/50 pl-11 pr-28 text-gray-12 transition-all duration-200 placeholder:text-gray-10 focus:border-red-9/50 focus:outline-none"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="right-22 absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-gray-6 p-1 text-gray-11 transition-all hover:bg-gray-7 hover:text-gray-12"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      <button
        type="submit"
        disabled={!query.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-red-9 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-red-10 disabled:bg-gray-6 disabled:opacity-50"
      >
        Buscar
      </button>
    </form>
  )
}
