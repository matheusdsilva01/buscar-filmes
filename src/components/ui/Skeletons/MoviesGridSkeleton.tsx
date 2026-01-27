export const MoviesGridSkeleton = () => {
  return (
    <section className="py-12 from-transparent bg-gray-1/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-red-9 rounded-full" />
            <div className="h-7 w-48 bg-gray-5/50 rounded animate-pulse" />
          </div>
          <div className="h-5 w-64 bg-gray-5/30 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-2/50 border border-gray-5/50 animate-pulse"
            >
              <div className="aspect-[2/3] bg-gray-5/50" />
              <div className="p-4 space-y-2">
                <div className="h-4 w-full bg-gray-5/50 rounded" />
                <div className="h-3 w-2/3 bg-gray-5/30 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
