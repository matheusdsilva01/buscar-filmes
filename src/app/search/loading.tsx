import React from "react";

import { Skeleton } from "components/MovieResult/Skeleton";
import { Search } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-1 via-gray-2 to-gray-3">
      <div className="bg-gray-2/80 backdrop-blur-sm border-b border-gray-5 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative group">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-8 animate-pulse" />
                  <div className="w-full h-12 pl-11 pr-20 rounded-xl bg-gray-3/30 border border-gray-4 animate-pulse" />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-16 rounded-lg bg-gray-5 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <div className="w-32 h-4 bg-gray-5 rounded animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="w-20 h-10 bg-gray-5 rounded-lg animate-pulse" />
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-5 rounded-lg animate-pulse"
                  />
                ))}
              </div>
              <div className="w-20 h-10 bg-gray-5 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-5 rounded animate-pulse" />
            <div className="w-48 h-4 bg-gray-5 rounded animate-pulse" />
          </div>
          <div className="w-24 h-3 bg-gray-5 rounded animate-pulse" />
        </div>

        <div className="space-y-4 mb-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <div className="w-32 h-4 bg-gray-5 rounded animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="w-20 h-10 bg-gray-5 rounded-lg animate-pulse" />
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-5 rounded-lg animate-pulse"
                  />
                ))}
              </div>
              <div className="w-20 h-10 bg-gray-5 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
