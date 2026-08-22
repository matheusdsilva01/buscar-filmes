import { getMovieSimilar } from "../../api/get-movie-similar"
import { Movie } from "../../types/Movie"
import { MovieGridCard } from "../MovieCard"
import { SectionHeader } from "../SectionHeader"

interface SimilarMoviesProps {
  movieId?: string
  movies?: Movie[]
}

export const SimilarMovies = async ({
  movieId,
  movies
}: SimilarMoviesProps) => {
  let list = movies
  if (!list && movieId) {
    const res = await getMovieSimilar(movieId)
    list = res.results
  }

  const visibleMovies = list?.slice(0, 12) || []
  if (visibleMovies.length === 0) return null

  return (
    <section>
      <SectionHeader
        title="Filmes Semelhantes"
        subtitle="Outros filmes que você pode gostar"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visibleMovies.map(movie => (
          <MovieGridCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
