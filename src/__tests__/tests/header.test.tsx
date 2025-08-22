import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "layouts/Header";

import { createMockRouter } from "../mocks/useRouterMock";

describe("Test header", () => {
  it("Should search a movie", () => {
    // provavelmente der erro
    const router = createMockRouter({});
    render(<Header />);
    const inputSearch = screen.getAllByPlaceholderText("Busca...")[0];

    userEvent.type(inputSearch, "batman");
    fireEvent.submit(inputSearch);
    expect(router.push).toHaveBeenCalledWith("/search/batman");
  });

  it("Should search a movie into menu mobile", () => {
    const router = createMockRouter({});
    // provavelmente der erro
    render(<Header />);
    const inputSearch = screen.getAllByPlaceholderText("Busca...")[1];

    userEvent.type(inputSearch, "batman");
    fireEvent.submit(inputSearch);

    expect(router.push).toHaveBeenCalledWith("/search/batman");
  });
});
