import Link from "next/link";

import { Film, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="bg-gray-2/50 border-gray-5/50 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border">
        <Film className="text-red-9 size-12" />
      </div>

      <h1 className="text-gray-12 mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Filme não encontrado
      </h1>

      <p className="text-gray-11 mb-8 max-w-md text-base">
        O filme que você está procurando não foi encontrado, pode ter sido
        removido ou o link está incorreto.
      </p>

      <Link
        href="/"
        className="bg-red-9 hover:bg-red-10 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors"
      >
        <Home className="size-4" />
        Voltar para a página inicial
      </Link>
    </div>
  );
}