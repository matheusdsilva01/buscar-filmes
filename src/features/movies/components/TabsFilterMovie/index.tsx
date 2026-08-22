"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { TrendingUp, Star, Flame } from "lucide-react"

import { FilterOption } from "../../types"

export const TabsFilterMovie = () => {
  const searchParams = useSearchParams()
  const selectedFilter = (searchParams.get("query") ||
    "popular") as FilterOption

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
  ]

  return (
    <div className="border-b border-gray-5/50 bg-gray-1/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <h2 className="mb-1 text-2xl font-bold text-gray-12">
              Descobrir filmes
            </h2>
            <p className="text-sm text-gray-11">
              {options.find(opt => opt.value === selectedFilter)?.description}
            </p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4">
          {options.map(option => {
            const Icon = option.icon
            const isSelected = option.value === selectedFilter

            return (
              <Link
                href={`?query=${option.value}`}
                scroll={false}
                key={option.value}
                className={`relative inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all md:gap-3 md:px-6 md:py-3 ${
                  isSelected
                    ? "bg-red-9 text-white"
                    : "border border-gray-5/50 bg-gray-3/50 text-gray-11 hover:border-gray-6/50 hover:bg-gray-4/70 hover:text-gray-12"
                }`}
              >
                <Icon className="size-4" />
                <span>{option.label}</span>
                {isSelected && (
                  <div className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-9" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
