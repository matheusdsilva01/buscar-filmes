"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Home, Search } from "lucide-react"

import { Sidebar } from "../Sidebar"

export const Header = () => {
  const pathname = usePathname()
  const inSearchPage = pathname.startsWith("/search")

  return (
    <header className="top-0 z-40 w-full border-b border-gray-5/30 bg-gray-1/80 text-white backdrop-blur-md lg:sticky">
      <nav className="flex w-full items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="logo site"
            className="h-8"
            width={200}
            height={32}
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {!inSearchPage && (
            <form
              action="/search"
              className="flex items-center overflow-hidden rounded-lg border border-gray-5/50 bg-gray-3/50 transition-colors focus-within:border-red-9/50"
            >
              <input
                name="query"
                className="w-44 bg-transparent px-3 py-2 text-sm text-gray-12 outline-none placeholder:text-gray-10"
                type="search"
                required
                placeholder="Buscar filmes..."
              />
              <button
                type="submit"
                className="px-3 py-2 text-gray-10 transition-colors hover:text-gray-12"
              >
                <Search className="size-4" />
              </button>
            </form>
          )}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-11 transition-colors hover:text-gray-12"
          >
            <Home className="size-4" />
            Home
          </Link>
        </div>

        <Sidebar />
      </nav>
    </header>
  )
}
