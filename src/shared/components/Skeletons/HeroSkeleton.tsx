export const HeroSkeleton = () => {
  return (
    <div className="relative flex animate-pulse overflow-hidden bg-gray-2 text-white sm:min-h-[85vh] lg:-mt-[70px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex w-full flex-col justify-end px-6 py-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="h-7 w-36 rounded-full bg-gray-5/50" />
            <div className="h-7 w-20 rounded-full bg-gray-5/50" />
          </div>

          <div className="mb-8 space-y-4">
            <div className="h-12 w-3/4 rounded-lg bg-gray-5/50 sm:h-14 lg:h-16" />
            <div className="space-y-2">
              <div className="h-5 w-full max-w-3xl rounded bg-gray-5/50" />
              <div className="h-5 w-4/5 max-w-2xl rounded bg-gray-5/50" />
              <div className="h-5 w-2/3 max-w-xl rounded bg-gray-5/50" />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="h-12 w-40 rounded-lg bg-red-9/30" />
            <div className="h-12 w-44 rounded-lg border border-gray-5/50 bg-gray-5/30" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="h-4 w-16 rounded bg-gray-5/50" />
            <div className="h-4 w-28 rounded bg-gray-5/50" />
            <div className="h-4 w-36 rounded bg-gray-5/50" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
