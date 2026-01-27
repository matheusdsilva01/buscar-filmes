import { Suspense } from "react";

import { HeroSection } from "components/pages/home/HeroSection";
import { MoviesHighlights } from "components/pages/home/MoviesHighlights";
import { TabsFilterMovie } from "components/pages/home/TabsFilterMovie";
import { HeroSkeleton } from "components/ui/Skeletons/HeroSkeleton";
import { MoviesGridSkeleton } from "components/ui/Skeletons/MoviesGridSkeleton";
import { FilterOption } from "services/TMDB";

type Props = {
  searchParams: {
    query?: FilterOption;
  };
};

const Home = async (props: Props) => {
  const { query } = props.searchParams;

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
};

export default Home;
