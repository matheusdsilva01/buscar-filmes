"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { navigationEngine, NavigationParams } from "../utils/NavigationEngine";

export function useNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToSearch = (params: NavigationParams) => {
    const currentQuery = searchParams.get("query") || "";
    const currentPage = Number(searchParams.get("page")) || 1;

    const newPath = navigationEngine.getSearchPath({
      query: params.query !== undefined ? params.query : currentQuery,
      page: params.page !== undefined ? params.page : currentPage
    });

    router.push(newPath);
  };

  const goToPage = (page: number) => {
    goToSearch({ page });
  };

  const clearSearch = () => {
    router.push(navigationEngine.getSearchPath({ query: "" }));
  };

  return {
    goToSearch,
    goToPage,
    clearSearch,
    engine: navigationEngine
  };
}
