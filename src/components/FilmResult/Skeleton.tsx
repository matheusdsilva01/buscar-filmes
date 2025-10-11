import { Loader } from "lucide-react";

export const Skeleton = () => {
  return (
    <div className="bg-gray-2/30 border border-gray-4 rounded-xl overflow-hidden animate-pulse">
      <div className="flex flex-col sm:flex-row">
        {/* Poster skeleton */}
        <div className="relative sm:w-48 sm:flex-shrink-0">
          <div className="aspect-[2/3] sm:h-64 bg-gray-5 flex items-center justify-center">
            <Loader className="w-8 h-8 text-gray-8 animate-spin" />
          </div>
        </div>
        
        {/* Conteúdo skeleton */}
        <div className="flex-1 p-6">
          <div className="space-y-3">
            {/* Título */}
            <div className="space-y-2">
              <div className="h-7 bg-gray-5 rounded-lg w-3/4" />
              <div className="flex gap-4">
                <div className="h-4 bg-gray-5 rounded w-16" />
                <div className="h-4 bg-gray-5 rounded w-12" />
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-5 rounded" />
                ))}
              </div>
              <div className="h-4 bg-gray-5 rounded w-12" />
              <div className="h-4 bg-gray-5 rounded w-20" />
            </div>
            
            {/* Sinopse */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-5 rounded w-full" />
              <div className="h-4 bg-gray-5 rounded w-full" />
              <div className="h-4 bg-gray-5 rounded w-3/4" />
            </div>
            
            {/* Botões */}
            <div className="flex gap-3 pt-2">
              <div className="h-10 bg-gray-5 rounded-lg w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
