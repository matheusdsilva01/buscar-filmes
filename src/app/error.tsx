"use client";

import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="bg-gray-2/50 border-gray-5/50 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border">
        <AlertTriangle className="text-red-9 size-12" />
      </div>

      <h1 className="text-gray-12 mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Algo deu errado
      </h1>

      <p className="text-gray-11 mb-8 max-w-md text-base">
        Ocorreu um erro ao carregar os dados. Por favor, tente novamente ou
        retorne para a página inicial.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="bg-red-9 hover:bg-red-10 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="size-4" />
          Tentar novamente
        </button>

        <Link
          href="/"
          className="bg-gray-3 hover:bg-gray-4 text-gray-12 border-gray-5/50 inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-colors"
        >
          <Home className="size-4" />
          Ir para a Home
        </Link>
      </div>
    </div>
  );
}