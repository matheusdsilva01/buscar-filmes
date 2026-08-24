import { searchMovies, SearchForm, MovieListCard } from "features/movies";
import { Search } from "lucide-react";
import { Pagination } from "shared/components";

type PageProps = {
  searchParams: {
    query?: string;
    page?: string | number;
  };
};

export default async function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.query || "";
  const page = Number(searchParams.page) || 1;

  const {
    results,
    total_pages: totalPages,
    total_results: totalResults
  } = await searchMovies(query, page);

  const hasResults = results.length > 0;

  return (
    <div className="min-h-screen">
      <div className="bg-gray-2/80 border-gray-5 border-b">
        <div className="container mx-auto px-4 py-6 sm:px-5 lg:px-8">
          <div className="max-w-2xl">
            <SearchForm initialQuery={query} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-8">
        {!query ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-5 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Search className="text-gray-11 h-8 w-8" />
            </div>
            <h2 className="text-gray-12 mb-2 text-xl font-semibold">
              Encontre seus filmes favoritos
            </h2>
            <p className="text-gray-11 max-w-md">
              Digite o nome de um filme na busca acima para encontrar
              informações detalhadas, avaliações e mais.
            </p>
          </div>
        ) : !hasResults ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-5 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Search className="text-gray-8 h-8 w-8" />
            </div>
            <h2 className="text-gray-12 mb-2 text-xl font-semibold">
              Nenhum filme encontrado
            </h2>
            <p className="text-gray-11 max-w-md">
              Tente usar palavras-chave diferentes ou verifique a ortografia da
              sua busca.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <Pagination page={page} totalPages={totalPages} query={query} />
            </div>

            <div className="mb-2">
              <p className="text-gray-12 text-sm">
                <span className="text-red-9 font-medium">{totalResults}</span>{" "}
                resultados encontrados para &quot;{query}&quot;
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              {results.map(movie => (
                <MovieListCard key={movie.id} movie={movie} />
              ))}
            </div>

            <div className="mt-6">
              <Pagination page={page} totalPages={totalPages} query={query} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
