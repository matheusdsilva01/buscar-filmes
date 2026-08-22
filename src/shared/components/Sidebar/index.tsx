"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { Home, Menu, Search, X } from "lucide-react"

export const Sidebar = () => {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const inSearchPage = pathname.startsWith("/search")

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-11 transition-colors hover:text-gray-12"
        aria-label="Abrir menu"
      >
        <Menu className="size-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform border-l border-gray-5/30 bg-gray-1 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-5/30 p-4">
          <span className="text-sm font-medium text-gray-12">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-gray-11 transition-colors hover:text-gray-12"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="space-y-6 p-4">
          {!inSearchPage && (
            <form
              onSubmit={e => {
                e.preventDefault()
                if (query.trim()) {
                  router.push(`/search?query=${query}`)
                  setIsOpen(false)
                  setQuery("")
                }
              }}
              className="flex items-center overflow-hidden rounded-lg border border-gray-5/50 bg-gray-3/50 transition-colors focus-within:border-red-9/50"
            >
              <input
                name="query"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-12 outline-none placeholder:text-gray-10"
                type="text"
                placeholder="Buscar filmes..."
              />
              <button
                type="submit"
                className="px-3 py-2.5 text-gray-10 transition-colors hover:text-gray-12"
              >
                <Search className="size-4" />
              </button>
            </form>
          )}

          <nav className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-11 transition-colors hover:bg-gray-3/50 hover:text-gray-12"
            >
              <Home className="size-4" />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-11 transition-colors hover:bg-gray-3/50 hover:text-gray-12"
            >
              <Search className="size-4" />
              <span className="text-sm">Buscar</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
