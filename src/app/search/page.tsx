import { MovieResult } from "components/MovieResult";
import { Pagination } from "components/Pagination";
import { SearchForm } from "components/SearchForm";
import { Search } from "lucide-react";
import { searchMovies } from "services/TMDB";

type PageProps = {
  searchParams: {
    query: string;
    page?: number;
  };
};

const ResultSearch = async ({ searchParams }: PageProps) => {
  const { query = "", page = 1 } = searchParams;
  const {
    results,
    total_pages: totalPages,
    total_results: totalResults
  } = await searchMovies({
    query,
    page
  });

  const hasResults = results.length > 0;
  const currentPageNum = Number(page);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-2/80 border-b border-gray-5">
        <div className="mx-auto px-4 container sm:px-5 lg:px-8 py-6">
          <div className="max-w-2xl">
            <SearchForm initialQuery={query} />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 container sm:px-5 lg:px-8">
        {!query ? (
          // Initial state - no search
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-5 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-11" />
            </div>
            <h2 className="text-xl font-semibold text-gray-12 mb-2">
              Encontre seus filmes favoritos
            </h2>
            <p className="text-gray-11 max-w-md">
              Digite o nome de um filme na busca acima para encontrar
              informações detalhadas, avaliações e mais.
            </p>
          </div>
        ) : !hasResults ? (
          // No results state
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-5 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-12 mb-2">
              Nenhum filme encontrado
            </h2>
            <p className="text-gray-11 max-w-md">
              Tente usar palavras-chave diferentes ou verifique a ortografia da
              sua busca.
            </p>
          </div>
        ) : (
          // Results state
          <>
            <div className="mb-6">
              <Pagination
                page={currentPageNum}
                totalPages={totalPages}
                query={query}
              />
            </div>

            <div className="mb-2">
              <p className="text-gray-12 text-sm">
                <span className="font-medium text-red-9">{totalResults}</span>{" "}
                resultados encontrados para &quot;{query}&quot;
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {results.map(movie => (
                <MovieResult key={movie.id} movie={movie} />
              ))}
            </div>

            <div>
              <Pagination
                page={currentPageNum}
                totalPages={totalPages}
                query={query}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultSearch;
