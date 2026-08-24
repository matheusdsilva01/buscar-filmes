import { Suspense } from "react";

import {
  HeroSection,
  MoviesHighlights,
  TabsFilterMovie,
  FilterOption
} from "features/movies";
import { HeroSkeleton, MoviesGridSkeleton } from "shared/components";

type Props = {
  searchParams: {
    query?: FilterOption;
  };
};

export default async function HomePage({ searchParams }: Props) {
  const { query } = searchParams;

  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <TabsFilterMovie />

      <Suspense fallback={<MoviesGridSkeleton />}>
        <MoviesHighlights filter={query} />
      </Suspense>
    </>
  );
}
