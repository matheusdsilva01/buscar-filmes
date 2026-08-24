export class DomainTranslator {
  private readonly STATUS_MAP: Record<string, string> = {
    Released: "Lançado",
    "Post Production": "Pós-produção",
    "In Production": "Em produção",
    Planned: "Planejado",
    Rumored: "Rumor",
    Canceled: "Cancelado"
  };

  translateMovieStatus(status: string | null | undefined): string {
    if (!status) return "";
    return this.STATUS_MAP[status] || status;
  }
}

export const domainTranslator = new DomainTranslator();
