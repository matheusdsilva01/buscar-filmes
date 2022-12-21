import { render, screen } from "@testing-library/react";
import Home from "pages/index";
import { filmsHighlights } from "tests/mocks/mockFilm";

describe("Test component index from home page", () => {
  it("should render component", () => {
    render(<Home filmsHighlights={filmsHighlights}></Home>);
    expect(screen.getByText(filmsHighlights[1].title)).toBeInTheDocument();
  });
});
