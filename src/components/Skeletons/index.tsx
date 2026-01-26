export const HeroSkeleton = () => {
  return (
    <div className="relative sm:min-h-[85vh] lg:-mt-[70px] text-white flex bg-gray-2 overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 w-full flex flex-col justify-end px-6 py-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="h-7 w-36 bg-gray-5/50 rounded-full" />
            <div className="h-7 w-20 bg-gray-5/50 rounded-full" />
          </div>

          <div className="space-y-4 mb-8">
            <div className="h-12 sm:h-14 lg:h-16 w-3/4 bg-gray-5/50 rounded-lg" />
            <div className="space-y-2">
              <div className="h-5 w-full max-w-3xl bg-gray-5/50 rounded" />
              <div className="h-5 w-4/5 max-w-2xl bg-gray-5/50 rounded" />
              <div className="h-5 w-2/3 max-w-xl bg-gray-5/50 rounded" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-12 w-40 bg-red-9/30 rounded-lg" />
            <div className="h-12 w-44 bg-gray-5/30 rounded-lg border border-gray-5/50" />
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="h-4 w-16 bg-gray-5/50 rounded" />
            <div className="h-4 w-28 bg-gray-5/50 rounded" />
            <div className="h-4 w-36 bg-gray-5/50 rounded" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

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
