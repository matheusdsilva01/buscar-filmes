"use client"

import Link from "next/link"

import { AlertTriangle, Home, RotateCcw } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-5/50 bg-gray-2/50">
        <AlertTriangle className="size-12 text-red-9" />
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-12 sm:text-4xl">
        Algo deu errado
      </h1>

      <p className="mb-8 max-w-md text-base text-gray-11">
        Ocorreu um erro ao carregar os dados. Por favor, tente novamente ou
        retorne para a página inicial.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-red-9 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-red-10"
        >
          <RotateCcw className="size-4" />
          Tentar novamente
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-5/50 bg-gray-3 px-6 py-3 text-sm font-medium text-gray-12 transition-colors hover:bg-gray-4"
        >
          <Home className="size-4" />
          Ir para a Home
        </Link>
      </div>
    </div>
  )
}
