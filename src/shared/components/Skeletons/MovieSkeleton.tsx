import { Loader } from "lucide-react"

export const MovieSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-4 bg-gray-2/30">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-48 sm:flex-shrink-0">
          <div className="flex aspect-[2/3] items-center justify-center bg-gray-5 sm:h-64">
            <Loader className="h-8 w-8 animate-spin text-gray-8" />
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="h-7 w-3/4 rounded-lg bg-gray-5" />
              <div className="flex gap-4">
                <div className="h-4 w-16 rounded bg-gray-5" />
                <div className="h-4 w-12 rounded bg-gray-5" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded bg-gray-5" />
                ))}
              </div>
              <div className="h-4 w-12 rounded bg-gray-5" />
              <div className="h-4 w-20 rounded bg-gray-5" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-5" />
              <div className="h-4 w-full rounded bg-gray-5" />
              <div className="h-4 w-3/4 rounded bg-gray-5" />
            </div>

            <div className="flex gap-3 pt-2">
              <div className="h-10 w-24 rounded-lg bg-gray-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
