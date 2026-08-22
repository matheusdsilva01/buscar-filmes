import Image from "next/image"

import { Tv, ShoppingCart, CreditCard } from "lucide-react"

import { assetResolver } from "@/shared/utils/AssetResolver"

import { getMovieProviders } from "../../api/get-movie-providers"
import { SectionHeader } from "../SectionHeader"

interface Provider {
  provider_id: number
  logo_path: string
  provider_name: string
}

interface MovieProvidersProps {
  movieId?: string
  providers?: {
    link?: string
    flatrate?: Provider[]
    rent?: Provider[]
    buy?: Provider[]
  }
}

const ProviderGroup = ({
  label,
  icon: Icon,
  items,
  link,
  emptyMessage
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  items?: Provider[]
  link?: string
  emptyMessage: string
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <Icon className="size-4 text-red-9" />
      <h3 className="text-sm font-medium text-gray-11">{label}</h3>
    </div>
    {items && items.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {items.map(provider => (
          <a
            key={provider.provider_id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={provider.provider_name}
          >
            <Image
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg border border-gray-5/50 transition-all hover:border-red-9/50"
              src={assetResolver.getMovieImage(provider.logo_path, "LOGO_MD")}
              alt={provider.provider_name}
            />
          </a>
        ))}
      </div>
    ) : (
      <p className="text-sm text-gray-10">{emptyMessage}</p>
    )}
  </div>
)

export const MovieProviders = async ({
  movieId,
  providers
}: MovieProvidersProps) => {
  let data = providers
  if (!data && movieId) {
    const res = await getMovieProviders(movieId)
    data = res.results?.BR
  }

  if (!data) return null

  const hasProviders = data.flatrate || data.rent || data.buy
  if (!hasProviders) return null

  return (
    <section>
      <SectionHeader title="Onde Assistir" />
      <div className="rounded-xl border border-gray-5/50 bg-gray-2/50 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ProviderGroup
            label="Stream"
            icon={Tv}
            items={data.flatrate}
            link={data.link}
            emptyMessage="Não há stream disponível"
          />
          <ProviderGroup
            label="Alugar"
            icon={CreditCard}
            items={data.rent}
            link={data.link}
            emptyMessage="Nenhum provedor para aluguel"
          />
          <ProviderGroup
            label="Comprar"
            icon={ShoppingCart}
            items={data.buy}
            link={data.link}
            emptyMessage="Não há provedores para compra"
          />
        </div>
      </div>
    </section>
  )
}
