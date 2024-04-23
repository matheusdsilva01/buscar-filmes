import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  page: number;
  totalPages: number | undefined;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages: total_page,
  onChangePage
}: PaginationProps) => {
  return (
    <section className="w-full flex justify-between px-10 my-3">
      <button
        disabled={page <= 1}
        className="bg-slate-400 px-4 py-1 rounded-md shadow-md  shadow-black/75 hover:bg-slate-500 active:bg-slate-600 disabled:bg-slate-400/20 disabled:shadow-none"
        onClick={() => onChangePage(page - 1)}
      >
        {" "}
        <ChevronLeftIcon width={24} />
      </button>
      <button
        disabled={page === total_page}
        className="bg-slate-400 px-4 py-1 rounded-md shadow-md  shadow-black/75 hover:bg-slate-500 active:bg-slate-600 disabled:bg-slate-400/20 disabled:shadow-none"
        onClick={() => onChangePage(page + 1)}
      >
        {" "}
        <ChevronRightIcon width={24} />
      </button>
    </section>
  );
};

export default Pagination;
