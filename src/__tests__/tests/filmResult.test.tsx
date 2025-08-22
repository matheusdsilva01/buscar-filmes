/**
 * @jest-environment jsdom
 */
import { mockMovie } from "__tests__/mocks/mockFilm";
import { createMockRouter } from "__tests__/mocks/useRouterMock";
import { fireEvent, render, screen } from "@testing-library/react";
import { FilmResult } from "components/FilmResult";

describe("Test component filmResult", () => {
  it("Should render component filmResult", () => {
    render(<FilmResult film={mockMovie} />);
    const heading = screen.getByRole("heading", {
      name: /fight club/i
    });
    expect(heading).toBeInTheDocument();
  });

  it("Should has an anchor tag with href='/film/id'", () => {
    const router = createMockRouter({});
    // provavelmente der erro
    render(<FilmResult film={mockMovie} />);
    const card = screen.getByRole("link");
    expect(card).toHaveAttribute("href", `/film/${mockMovie.id}`);
  });

  it("Should render image error when to receive img null", () => {
    const filmWithImgNull = { ...mockMovie, backdrop_path: null };

    render(<FilmResult film={filmWithImgNull} />);

    const card = screen.getByRole("img", {
      name: /capa do filme fight club/i
    });

    fireEvent.error(card);

    const src = card.getAttribute("src");

    expect(src).toBe("/icons/imgError.svg");
  });

  it("Should render show 'Este filme não contem descrição :(' when film overview is null", () => {
    const filmWithDescriptionNull = { ...mockMovie, overview: "" };

    render(<FilmResult film={filmWithDescriptionNull} />);

    const overview = screen.getByTestId("overview");

    expect(overview.innerHTML).toBe("Este filme não contem descrição :(");
  });
});
