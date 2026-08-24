import { getMovieHighlights } from "../../api/get-movie-highlights"
import { FilterOption } from "../../types"
import { MovieGridCard } from "../MovieCard"

type MoviesHighlightsProps = {
  filter?: FilterOption
}

export const MoviesHighlights = async ({ filter }: MoviesHighlightsProps) => {
  const { results } = await getMovieHighlights(filter || "popular")

  return (
    <section className="bg-gray-1/30 from-transparent py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-red-9" />
            <h2 className="text-2xl font-bold text-gray-12">
              {filter === "trending" && "Filmes em Alta"}
              {filter === "top_rated" && "Melhores Avaliados"}
              {(!filter || filter === "popular") && "Filmes Populares"}
            </h2>
          </div>
          <p className="max-w-2xl text-gray-11">
            {filter === "trending" &&
              "Os filmes mais assistidos e comentados da semana"}
            {filter === "top_rated" &&
              "Filmes com as melhores notas da crítica e do público"}
            {(!filter || filter === "popular") &&
              "Os filmes mais populares do momento"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {results.map(item => (
            <MovieGridCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
