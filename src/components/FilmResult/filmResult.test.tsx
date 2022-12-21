import { RouterContext } from "next/dist/shared/lib/router-context";

import { fireEvent, render, screen } from "@testing-library/react";

import { mockFilm } from "../../tests/mocks/mockFilm";
import { createMockRouter } from "../../tests/mocks/useRouterMock";
import FilmResult from "./FilmResult";

describe("Test component filmResult", () => {
  it("Should render component filmResult", () => {
    render(<FilmResult film={mockFilm} />);
    expect(
      screen.getByRole("heading", {
        name: /fight club/i
      })
    ).toBeInTheDocument();
  });

  it("Should has an anchor tag with href='/film/id'", () => {
    const router = createMockRouter({});
    // provavelmente der erro
    render(
      <RouterContext.Provider value={router}>
        <FilmResult film={mockFilm} />
      </RouterContext.Provider>
    );
    const card = screen.getByRole("link");
    expect(card).toHaveAttribute("href", `/film/${mockFilm.id}`);
  });

  it("Should render image error when to receive img null", () => {
    const filmWithImgNull = { ...mockFilm, backdrop_path: null };

    render(<FilmResult film={filmWithImgNull} />);

    const card = screen.getByRole("img", {
      name: /capa do filme fight club/i
    });

    fireEvent.error(card);

    const src = card.getAttribute("src");

    expect(src).toBe("/icons/imgError.svg");
  });

  it("Should render show 'Este filme não contem descrição :(' when film overview is null", () => {
    const filmWithDescriptionNull = { ...mockFilm, overview: "" };

    render(<FilmResult film={filmWithDescriptionNull} />);

    const overview = screen.getByTestId("overview");

    expect(overview.innerHTML).toBe("Este filme não contem descrição :(");
  });
});
