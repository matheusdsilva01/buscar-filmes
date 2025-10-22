"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { TrendingUp, Star, Flame } from "lucide-react";
import { FilterOption } from "services/TMDB";

export const TabsFilterMovie = () => {
  const searchParams = useSearchParams();
  const selectedFilter = (searchParams.get("query") ||
    "popular") as FilterOption;

  const options = [
    {
      value: "popular",
      label: "Populares",
      icon: Flame,
      description: "Os filmes mais assistidos"
    },
    {
      value: "trending",
      label: "Em alta",
      icon: TrendingUp,
      description: "Tendências da semana"
    },
    {
      value: "top_rated",
      label: "Bem avaliados",
      icon: Star,
      description: "Melhores notas do público"
    }
  ];

  return (
    <div className="bg-gray-1/50 border-b border-gray-5/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-12 mb-1">
              Descobrir filmes
            </h2>
            <p className="text-sm text-gray-11">
              {options.find(opt => opt.value === selectedFilter)?.description}
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-4">
          {options.map(option => {
            const Icon = option.icon;
            const isSelected = option.value === selectedFilter;

            return (
              <Link
                href={`?query=${option.value}`}
                scroll={false}
                key={option.value}
                className={`relative inline-flex items-center shrink-0 gap-1.5 px-3 py-1.5 md:gap-3 md:px-6 md:py-3 rounded-md font-medium text-sm transition-all ${
                  isSelected
                    ? "bg-red-9 text-white"
                    : "bg-gray-3/50 hover:bg-gray-4/70 text-gray-11 hover:text-gray-12 border border-gray-5/50 hover:border-gray-6/50"
                }`}
              >
                <Icon className="size-4" />
                <span>{option.label}</span>
                {isSelected && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-9 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
