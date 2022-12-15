import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "../components/Pagination";

const totalPage = 10;
const pageinitial = 1;
const callback = jest.fn();

describe("Test pagination", () => {
  it("Should render pagination", () => {
    render(
      <Pagination
        total_page={totalPage}
        page={pageinitial}
        onChangePage={callback}
      />
    );
    expect(1).toEqual(1);
    const [prevPage, nextPage] = screen.getAllByRole("button");
    expect(prevPage).toBeInTheDocument();
    expect(nextPage).toBeInTheDocument();
  });
  it("Should search next page", () => {
    render(
      <Pagination
        total_page={totalPage}
        page={pageinitial}
        onChangePage={callback}
      />
    );
    const [prevPage, nextPage] = screen.getAllByRole("button");
    userEvent.click(nextPage);
    expect(callback).toHaveBeenCalled();
  });
  it("Should search prev page", () => {
    render(
      <Pagination
        total_page={totalPage}
        page={pageinitial + 1}
        onChangePage={callback}
      />
    );
    const [prevPage] = screen.getAllByRole("button");
    userEvent.click(prevPage);
    expect(callback).toHaveBeenCalled();
  });
  it("Should not search next page", () => {
    render(
      <Pagination
        total_page={totalPage}
        page={totalPage}
        onChangePage={callback}
      />
    );
    const [prevPage, nextPage] = screen.getAllByRole("button");
    userEvent.click(nextPage);
    expect(callback).not.toHaveBeenCalled();
  });
  it("Should not search prev page", () => {
    render(
      <Pagination
        total_page={totalPage}
        page={pageinitial}
        onChangePage={callback}
      />
    );
    const [prevPage] = screen.getAllByRole("button");
    userEvent.click(prevPage);
    expect(callback).not.toHaveBeenCalled();
  });
});
