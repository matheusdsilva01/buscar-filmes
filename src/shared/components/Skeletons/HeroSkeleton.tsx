export const HeroSkeleton = () => {
  return (
    <div className="bg-gray-2 relative flex animate-pulse overflow-hidden text-white sm:min-h-[85vh] lg:-mt-[70px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex w-full flex-col justify-end px-6 py-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="bg-gray-5/50 h-7 w-36 rounded-full" />
            <div className="bg-gray-5/50 h-7 w-20 rounded-full" />
          </div>

          <div className="mb-8 space-y-4">
            <div className="bg-gray-5/50 h-12 w-3/4 rounded-lg sm:h-14 lg:h-16" />
            <div className="space-y-2">
              <div className="bg-gray-5/50 h-5 w-full max-w-3xl rounded" />
              <div className="bg-gray-5/50 h-5 w-4/5 max-w-2xl rounded" />
              <div className="bg-gray-5/50 h-5 w-2/3 max-w-xl rounded" />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="bg-red-9/30 h-12 w-40 rounded-lg" />
            <div className="bg-gray-5/30 border-gray-5/50 h-12 w-44 rounded-lg border" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="bg-gray-5/50 h-4 w-16 rounded" />
            <div className="bg-gray-5/50 h-4 w-28 rounded" />
            <div className="bg-gray-5/50 h-4 w-36 rounded" />
          </div>
        </div>
      </div>

      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
};
