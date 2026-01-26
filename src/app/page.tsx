import { Suspense } from "react";

import { HeroSection } from "components/HeroSection";
import { MoviesHighlights } from "components/MoviesHighlights";
import { HeroSkeleton, MoviesGridSkeleton } from "components/Skeletons";
import { TabsFilterMovie } from "components/TabsFilterMovie";
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
