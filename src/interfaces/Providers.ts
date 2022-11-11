interface Providers {
  link: string;
  rent: Buy[];
  flatrate: Buy[];
  buy: Buy[];
}

interface Buy {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export type { Providers };
