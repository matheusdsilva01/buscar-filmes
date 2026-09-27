import { Suspense } from "react"

import {
  HeroSection,
  MoviesHighlights,
  TabsFilterMovie,
  FilterOption
} from "@/features/movies"
import { HeroSkeleton, MoviesGridSkeleton } from "@/shared/components"

type Props = {
  searchParams: {
    query?: FilterOption
  }
}

export default async function HomePage({ searchParams }: Props) {
  const { query } = await searchParams

  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={null}>
        <TabsFilterMovie />
      </Suspense>

      <Suspense fallback={<MoviesGridSkeleton />}>
        <MoviesHighlights filter={query} />
      </Suspense>
    </>
  )
}
