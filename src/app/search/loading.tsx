import React from "react"

import { Search } from "lucide-react"

import { MovieSkeleton } from "@/shared/components/Skeletons"

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-1 via-gray-2 to-gray-3">
      <div className="sticky top-0 z-40 border-b border-gray-5 bg-gray-2/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="max-w-2xl flex-1">
              <div className="group relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-pulse text-gray-8" />
                  <div className="h-12 w-full animate-pulse rounded-xl border border-gray-4 bg-gray-3/30 pl-11 pr-20" />
                  <div className="absolute right-2 top-1/2 h-8 w-16 -translate-y-1/2 animate-pulse rounded-lg bg-gray-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-5" />
            <div className="flex items-center gap-2">
              <div className="h-10 w-20 animate-pulse rounded-lg bg-gray-5" />
              <div className="hidden items-center gap-1 sm:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 animate-pulse rounded-lg bg-gray-5"
                  />
                ))}
              </div>
              <div className="h-10 w-20 animate-pulse rounded-lg bg-gray-5" />
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-pulse rounded bg-gray-5" />
            <div className="h-4 w-48 animate-pulse rounded bg-gray-5" />
          </div>
          <div className="h-3 w-24 animate-pulse rounded bg-gray-5" />
        </div>

        <div className="mb-8 space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieSkeleton key={index} />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-5" />
            <div className="flex items-center gap-2">
              <div className="h-10 w-20 animate-pulse rounded-lg bg-gray-5" />
              <div className="hidden items-center gap-1 sm:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 animate-pulse rounded-lg bg-gray-5"
                  />
                ))}
              </div>
              <div className="h-10 w-20 animate-pulse rounded-lg bg-gray-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
