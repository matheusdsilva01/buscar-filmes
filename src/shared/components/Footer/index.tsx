"use client";
import Link from "next/link";

import { Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-1 border-gray-3 mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-gray-11 flex flex-col items-center gap-2 text-sm md:flex-row">
            <div className="flex gap-2">
              <span>Feito com</span>
              <Heart className="text-red-9 h-4 w-4" />
              <span>usando Next.js & TMDB API</span>
            </div>
            <Link
              href="https://github.com/matheusdsilva01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-11 hover:text-red-9 flex items-center gap-2 transition-colors"
            >
              <Github className="h-4 w-4 transition-all" />
              <span className="text-sm">Desenvolvedor</span>
            </Link>
          </div>
          <div className="text-gray-11 text-sm">
            © {new Date().getFullYear()} Buscar Filmes. Projeto para estudos.
          </div>
        </div>
      </div>
    </footer>
  );
};
