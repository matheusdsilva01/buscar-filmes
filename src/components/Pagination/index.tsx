import Link from "next/link";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontal,
} from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number | undefined;
  query?: string;
}

export const Pagination = ({ page, totalPages, query }: PaginationProps) => {
  if (!totalPages || totalPages <= 1) return <></>;

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const generatePageNumbers = () => {
    if (!totalPages) return [];

    const pages = [];
    const showPages = 5;

    let startPage = Math.max(1, page - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // First page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Pages in the middle
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const baseButtonClass =
    "flex items-center justify-center min-w-10 h-10 text-sm font-medium transition-all rounded-lg";
  const activeButtonClass = `${baseButtonClass} bg-red-9 text-white`;
  const inactiveButtonClass = `${baseButtonClass} bg-gray-3 px-1 text-gray-12 border border-gray-5 hover:bg-gray-4 hover:border-gray-6`;
  const disabledButtonClass = `${baseButtonClass} bg-gray-2 px-1 text-gray-8 cursor-not-allowed border border-gray-4`;

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center text-sm text-gray-11">
        <span>
          Página <span className="font-medium text-gray-12">{page}</span> de{" "}
          <span className="font-medium text-gray-12">{totalPages}</span>
        </span>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-2">
        {/* Previous button */}
        {isFirstPage ? (
          <span className={disabledButtonClass}>
            <ChevronLeftIcon className="size-4" />
            <span className="hidden sm:inline ml-1">Anterior</span>
          </span>
        ) : (
          <Link
            href={{ query: { page: page - 1, query } }}
            className={inactiveButtonClass}
          >
            <ChevronLeftIcon className="size-4" />
            <span className="hidden sm:inline ml-1">Anterior</span>
          </Link>
        )}

        {/* Page numbers */}
        <div className="hidden sm:flex items-center gap-1">
          {pageNumbers.map((pageNum, index) => {
            if (pageNum === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="flex items-center justify-center min-w-[40px] h-10 text-gray-8"
                >
                  <MoreHorizontal className="size-4" />
                </span>
              );
            }

            const isCurrentPage = pageNum === page;

            return isCurrentPage ? (
              <span key={pageNum} className={activeButtonClass}>
                {pageNum}
              </span>
            ) : (
              <Link
                key={pageNum}
                href={{ query: { page: pageNum as number, query } }}
                className={inactiveButtonClass}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>

        {isLastPage ? (
          <span className={disabledButtonClass}>
            <span className="hidden sm:inline mr-1">Próximo</span>
            <ChevronRightIcon className="size-4" />
          </span>
        ) : (
          <Link
            href={{ query: { page: page + 1, query } }}
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
