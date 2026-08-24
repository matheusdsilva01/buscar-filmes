import { Loader } from "lucide-react";

export const MovieSkeleton = () => {
  return (
    <div className="bg-gray-2/30 border-gray-4 animate-pulse overflow-hidden rounded-xl border">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-48 sm:flex-shrink-0">
          <div className="bg-gray-5 flex aspect-[2/3] items-center justify-center sm:h-64">
            <Loader className="text-gray-8 h-8 w-8 animate-spin" />
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="bg-gray-5 h-7 w-3/4 rounded-lg" />
              <div className="flex gap-4">
                <div className="bg-gray-5 h-4 w-16 rounded" />
                <div className="bg-gray-5 h-4 w-12 rounded" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="bg-gray-5 h-4 w-4 rounded" />
                ))}
              </div>
              <div className="bg-gray-5 h-4 w-12 rounded" />
              <div className="bg-gray-5 h-4 w-20 rounded" />
            </div>

            <div className="space-y-2">
              <div className="bg-gray-5 h-4 w-full rounded" />
              <div className="bg-gray-5 h-4 w-full rounded" />
              <div className="bg-gray-5 h-4 w-3/4 rounded" />
            </div>

            <div className="flex gap-3 pt-2">
              <div className="bg-gray-5 h-10 w-24 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
