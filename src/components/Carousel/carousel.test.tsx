import { render, screen } from "@testing-library/react";
import { listMocksFilms } from "tests/mocks/mockFilm";

import Carousel from "./Carousel";

describe("Carousel component", () => {
  it("should render carousel", () => {
    render(<Carousel items={listMocksFilms} />);
    expect(screen.getByText(listMocksFilms[0].title)).toBeInTheDocument();
  });
});
