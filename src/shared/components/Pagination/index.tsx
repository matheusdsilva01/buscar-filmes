import Link from "next/link";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontal
} from "lucide-react";

import { navigationEngine } from "../../utils/NavigationEngine";
import { paginationEngine } from "../../utils/PaginationEngine";

interface PaginationProps {
  page: number;
  totalPages: number | undefined;
  query?: string;
}

export const Pagination = ({ page, totalPages, query }: PaginationProps) => {
  if (!totalPages || totalPages <= 1) return null;

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const pageItems = paginationEngine.generate({
    currentPage: page,
    totalPages: totalPages,
    siblingCount: 1,
    showBoundaries: true
  });

  const baseButtonClass =
    "flex items-center justify-center min-w-10 h-10 text-sm font-medium transition-all rounded-lg";
  const activeButtonClass = `${baseButtonClass} bg-red-9 text-white`;
  const inactiveButtonClass = `${baseButtonClass} bg-gray-3 px-1 text-gray-12 border border-gray-5 hover:bg-gray-4 hover:border-gray-6`;
  const disabledButtonClass = `${baseButtonClass} bg-gray-2 px-1 text-gray-8 cursor-not-allowed border border-gray-4`;

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="text-gray-11 flex items-center text-sm">
        <span>
          Página <span className="text-gray-12 font-medium">{page}</span> de{" "}
          <span className="text-gray-12 font-medium">{totalPages}</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        {isFirstPage ? (
          <span className={disabledButtonClass}>
            <ChevronLeftIcon className="size-4" />
            <span className="ml-1 hidden sm:inline">Anterior</span>
          </span>
        ) : (
          <Link
            href={navigationEngine.getSearchPath({ query, page: page - 1 })}
            className={inactiveButtonClass}
          >
            <ChevronLeftIcon className="size-4" />
            <span className="ml-1 hidden sm:inline">Anterior</span>
          </Link>
        )}

        <div className="hidden items-center gap-1 sm:flex">
          {pageItems.map((item, index) => {
            if (item.type === "gap") {
              return (
                <span
                  key={`dots-${index}`}
                  className="text-gray-8 flex h-10 min-w-[40px] items-center justify-center"
                >
                  <MoreHorizontal className="size-4" />
                </span>
              );
            }

            return item.isCurrent ? (
              <span key={`page-${item.value}`} className={activeButtonClass}>
                {item.value}
              </span>
            ) : (
              <Link
                key={`page-${item.value}`}
                href={navigationEngine.getSearchPath({
                  query,
                  page: item.value
                })}
                className={inactiveButtonClass}
              >
                {item.value}
              </Link>
            );
          })}
        </div>

        {isLastPage ? (
          <span className={disabledButtonClass}>
            <span className="mr-1 hidden sm:inline">Próximo</span>
            <ChevronRightIcon className="size-4" />
          </span>
        ) : (
          <Link
            href={navigationEngine.getSearchPath({ query, page: page + 1 })}
            className={inactiveButtonClass}
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRightIcon className="size-4" />
          </Link>
        )}
      </div>
    </div>
  );
};
