import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  page: number;
  totalPages: number | undefined;
  onChangePage: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChangePage }: PaginationProps) => {
  const isFirstPage = page === 1;
  const hasMorePages = totalPages && page < totalPages;

  const generatePageNumbers = () => {
    if (!totalPages) return [];

    const pages = [];
    const showPages = 5; // Número de páginas para mostrar

    let startPage = Math.max(1, page - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    // Ajusta o início se estivermos no final
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Adiciona "..." no início se necessário
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Adiciona as páginas do meio
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Adiciona "..." no final se necessário
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav
      role="navigation"
      aria-label="Navegação de Paginação"
      className="flex items-center justify-between container mx-auto my-4"
    >
      {/* Mobile view */}
      <div className="flex justify-between flex-1 sm:hidden">
        {isFirstPage ? (
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md dark:text-gray-600 dark:bg-gray-800 dark:border-gray-600">
            Anterior
          </span>
        ) : (
          <button
            onClick={() => onChangePage(page - 1)}
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-700 dark:active:bg-gray-700 dark:active:text-gray-300"
          >
            Anterior
          </button>
        )}

        {hasMorePages ? (
          <button
            onClick={() => onChangePage(page + 1)}
            className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-700 dark:active:bg-gray-700 dark:active:text-gray-300"
          >
            Próximo
          </button>
        ) : (
          <span className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md dark:text-gray-600 dark:bg-gray-800 dark:border-gray-600">
            Próximo
          </span>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 leading-5 dark:text-gray-400">
            Mostrando página <span className="font-medium">{page}</span> de{" "}
            <span className="font-medium">{totalPages || 0}</span>
          </p>
        </div>

        <div>
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            {/* Previous Page Link */}
            {isFirstPage ? (
              <span aria-disabled="true" aria-label="Página anterior">
                <span className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5 dark:bg-gray-800 dark:border-gray-600">
                  <ChevronLeftIcon className="w-5 h-5" />
                </span>
              </span>
            ) : (
              <button
                onClick={() => onChangePage(page - 1)}
                className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:active:bg-gray-700 dark:focus:border-blue-800"
                aria-label="Página anterior"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
            )}

            {/* Page Numbers */}
            {pageNumbers.map((pageNum, index) => {
              if (pageNum === "...") {
                return (
                  <span
                    key={`dots-${index}`}
                    className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5 dark:bg-gray-800 dark:border-gray-600"
                  >
                    ...
                  </span>
                );
              }

              const isCurrentPage = pageNum === page;

              return isCurrentPage ? (
                <span
                  key={pageNum}
                  aria-current="page"
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-white bg-blue-600 border border-blue-600 cursor-default leading-5 dark:bg-blue-700 dark:border-blue-700"
                >
                  {pageNum}
                </span>
              ) : (
                <button
                  key={pageNum}
                  onClick={() => onChangePage(pageNum as number)}
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:text-gray-300 dark:active:bg-gray-700 dark:focus:border-blue-800"
                  aria-label={`Ir para página ${pageNum}`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Page Link */}
            {hasMorePages ? (
              <button
                onClick={() => onChangePage(page + 1)}
                className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:active:bg-gray-700 dark:focus:border-blue-800"
                aria-label="Próxima página"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            ) : (
              <span aria-disabled="true" aria-label="Próxima página">
                <span className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-r-md leading-5 dark:bg-gray-800 dark:border-gray-600">
                  <ChevronRightIcon className="w-5 h-5" />
                </span>
              </span>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
