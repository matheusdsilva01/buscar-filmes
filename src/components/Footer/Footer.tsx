"use client";
import Link from "next/link";

import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-1 border-t border-gray-3 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center flex-col md:flex-row gap-2 text-sm text-gray-11">
            <div className="flex gap-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-9" />
              <span>usando Next.js & TMDB API</span>
            </div>
            <Link
              href="https://github.com/matheusdsilva01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-11 hover:text-red-9 transition-colors"
            >
              <Github className="w-4 h-4 transition-all" />
              <span className="text-sm">Desenvolvedor</span>
            </Link>
          </div>
          <div className="text-sm text-gray-11">
            © {new Date().getFullYear()} Buscar Filmes. Projeto para estudos.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
