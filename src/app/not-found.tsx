import Link from "next/link"

import { Film, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-5/50 bg-gray-2/50">
        <Film className="size-12 text-red-9" />
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-12 sm:text-4xl">
        Filme não encontrado
      </h1>

      <p className="mb-8 max-w-md text-base text-gray-11">
        O filme que você está procurando não foi encontrado, pode ter sido
        removido ou o link está incorreto.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-red-9 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-red-10"
      >
        <Home className="size-4" />
        Voltar para a página inicial
      </Link>
    </div>
  )
}
