"use client"
import Link from "next/link"

import { Github, Heart } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-3 bg-gray-1">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-sm text-gray-11 md:flex-row">
            <div className="flex gap-2">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-9" />
              <span>usando Next.js & TMDB API</span>
            </div>
            <Link
              href="https://github.com/matheusdsilva01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-11 transition-colors hover:text-red-9"
            >
              <Github className="h-4 w-4 transition-all" />
              <span className="text-sm">Desenvolvedor</span>
            </Link>
          </div>
          <div className="text-sm text-gray-11">
            © {new Date().getFullYear()} Buscar Filmes. Projeto para estudos.
          </div>
        </div>
      </div>
    </footer>
  )
}
