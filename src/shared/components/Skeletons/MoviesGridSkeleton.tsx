export const MoviesGridSkeleton = () => {
  return (
    <section className="bg-gray-1/30 from-transparent py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="bg-red-9 h-8 w-1 rounded-full" />
            <div className="bg-gray-5/50 h-7 w-48 animate-pulse rounded" />
          </div>
          <div className="bg-gray-5/30 h-5 w-64 animate-pulse rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-2/50 border-gray-5/50 animate-pulse overflow-hidden rounded-xl border"
            >
              <div className="bg-gray-5/50 aspect-[2/3]" />
              <div className="space-y-2 p-4">
                <div className="bg-gray-5/50 h-4 w-full rounded" />
                <div className="bg-gray-5/30 h-3 w-2/3 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
