import Image from "next/image"

import { User } from "lucide-react"

import { assetResolver } from "@/shared/utils/AssetResolver"

import { getMovieCredits } from "../../api/get-movie-credits"
import { CastMember } from "../../types/Credits"
import { SectionHeader } from "../SectionHeader"

interface MovieCastProps {
  movieId?: string
  cast?: CastMember[]
}

export const MovieCast = async ({ movieId, cast }: MovieCastProps) => {
  let list = cast
  if (!list && movieId) {
    const credits = await getMovieCredits(movieId)
    list = credits.cast
  }

  const visibleCast = list?.slice(0, 15) || []
  if (visibleCast.length === 0) return null

  return (
    <section>
      <SectionHeader
        title="Elenco"
        subtitle="Principais atores e atrizes do filme"
      />
      <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visibleCast.map(member => (
          <div
            key={member.id}
            className="group flex w-32 shrink-0 flex-col items-center"
          >
            <div className="mb-2 h-28 w-28 overflow-hidden rounded-full border-2 border-gray-5/50 transition-all group-hover:border-red-9/50">
              {member.profile_path ? (
                <Image
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                  src={assetResolver.getMovieImage(
                    member.profile_path,
                    "PROFILE_SM"
                  )}
                  alt={member.name}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-3">
                  <User className="size-8 text-gray-8" />
                </div>
              )}
            </div>
            <p className="line-clamp-1 text-center text-sm font-medium text-gray-12">
              {member.name}
            </p>
            <p className="line-clamp-1 text-center text-xs text-gray-11">
              {member.character}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
