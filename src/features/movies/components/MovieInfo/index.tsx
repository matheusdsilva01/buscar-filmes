import {
  Calendar,
  Clock,
  DollarSign,
  Globe,
  Info,
  TrendingUp
} from "lucide-react";

import { MovieDetails } from "../../types/Movie";
import { domainTranslator } from "../../utils/DomainTranslator";
import { SectionHeader } from "../SectionHeader";

interface MovieInfoProps {
  movie: MovieDetails;
}

const formatCurrency = (value: number) => {
  if (!value) return "—";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "USD" });
};

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  const hours = movie.runtime ? Math.floor(movie.runtime / 60) : 0;
  const minutes = movie.runtime ? movie.runtime % 60 : 0;

  const items = [
    {
      icon: Info,
      label: "Status",
      value: domainTranslator.translateMovieStatus(movie.status) || movie.status
    },
    {
      icon: Calendar,
      label: "Lançamento",
      value: movie.release_date
        ? new Date(movie.release_date).toLocaleDateString("pt-BR")
        : "Sem data prevista"
    },
    {
      icon: Clock,
      label: "Duração",
      value: movie.runtime ? `${hours}h ${minutes}m` : "—"
    },
    {
      icon: DollarSign,
      label: "Orçamento",
      value: formatCurrency(movie.budget)
    },
    {
      icon: TrendingUp,
      label: "Receita",
      value: formatCurrency(movie.revenue)
    },
    {
      icon: Globe,
      label: "Idiomas",
      value: movie.spoken_languages?.map(l => l.name).join(", ") || "—"
    }
  ];

  return (
    <section>
      <SectionHeader title="Informações" />
      <div className="bg-gray-2/50 border-gray-5/50 rounded-xl border p-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {items.map(item => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon className="text-red-9 mt-0.5 size-5 shrink-0" />
              <div>
                <p className="text-gray-10 text-xs tracking-wide uppercase">
                  {item.label}
                </p>
                <p className="text-gray-12 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
