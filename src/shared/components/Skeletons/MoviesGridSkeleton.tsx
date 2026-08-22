export const MoviesGridSkeleton = () => {
  return (
    <section className="bg-gray-1/30 from-transparent py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-red-9" />
            <div className="h-7 w-48 animate-pulse rounded bg-gray-5/50" />
          </div>
          <div className="h-5 w-64 animate-pulse rounded bg-gray-5/30" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-xl border border-gray-5/50 bg-gray-2/50"
            >
              <div className="aspect-[2/3] bg-gray-5/50" />
              <div className="space-y-2 p-4">
                <div className="h-4 w-full rounded bg-gray-5/50" />
                <div className="h-3 w-2/3 rounded bg-gray-5/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
