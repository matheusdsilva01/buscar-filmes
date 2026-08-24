"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { TrendingUp, Star, Flame } from "lucide-react";

import { FilterOption } from "../../types";

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
    <div className="bg-gray-1/50 border-gray-5/50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <h2 className="text-gray-12 mb-1 text-2xl font-bold">
              Descobrir filmes
            </h2>
            <p className="text-gray-11 text-sm">
              {options.find(opt => opt.value === selectedFilter)?.description}
            </p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4">
          {options.map(option => {
            const Icon = option.icon;
            const isSelected = option.value === selectedFilter;

            return (
              <Link
                href={`?query=${option.value}`}
                scroll={false}
                key={option.value}
                className={`relative inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all md:gap-3 md:px-6 md:py-3 ${
                  isSelected
                    ? "bg-red-9 text-white"
                    : "bg-gray-3/50 hover:bg-gray-4/70 text-gray-11 hover:text-gray-12 border-gray-5/50 hover:border-gray-6/50 border"
                }`}
              >
                <Icon className="size-4" />
                <span>{option.label}</span>
                {isSelected && (
                  <div className="bg-red-9 absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
