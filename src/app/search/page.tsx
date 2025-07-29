import { FilmResult } from "components/FilmResult";
import { Pagination } from "components/Pagination";
import { searchMovies } from "services/TMDB/searchMovies";

type PageProps = {
  searchParams: {
    query: string;
    page?: number;
  };
};

const ResultSearch = async ({ searchParams }: PageProps) => {
  const { query = "", page = 1 } = searchParams;
  const { results, total_pages: totalPages } = await searchMovies({
    query,
    page
  });

  return (
    <>
      <form className="w-full px-8 mb-8 mt-8">
        <input
          name="query"
          type="text"
          defaultValue={query}
          placeholder="Pesquise um filme"
          className="w-full p-2 rounded-lg bg-black-bright text-white shadow-slate-700 shadow-[0_0_2px] placeholder:text-zinc-500"
        />
      </form>
      <Pagination page={Number(page)} totalPages={totalPages} query={query} />
      <section className="flex flex-col gap-y-5 px-10">
        {results.map(film => (
          <FilmResult key={film.id} film={film} />
        ))}
      </section>
      <Pagination page={Number(page)} totalPages={totalPages} query={query} />
    </>
  );
};

export default ResultSearch;
