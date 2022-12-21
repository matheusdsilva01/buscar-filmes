import { RouterContext } from "next/dist/shared/lib/router-context";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMockRouter } from "../../tests/mocks/useRouterMock";
import Header from "./Header";

describe("Test header", () => {
  it("Should render header", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Header />
      </RouterContext.Provider>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("Should open nav bar", async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Header />
      </RouterContext.Provider>
    );

    const openNav = screen.getByTestId("button-open-nav");
    userEvent.click(openNav);
    await waitFor(() => {
      const closeNav = screen.queryByTestId("button-close-nav");
      expect(closeNav).toBeInTheDocument();
    });
  });

  it("Should close nav bar", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Header />
      </RouterContext.Provider>
    );

    const openNav = screen.getByTestId("button-open-nav");
    userEvent.click(openNav);
    const closeNav = screen.getByTestId("button-close-nav");
    userEvent.click(closeNav);
    expect(closeNav).not.toBeInTheDocument();
  });

  it("Should search a movie", () => {
    // provavelmente der erro
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
    const inputSearch = screen.getAllByPlaceholderText("Busca...")[0];

    userEvent.type(inputSearch, "batman");
    fireEvent.submit(inputSearch);
    expect(router.push).toHaveBeenCalledWith("/search/batman");
  });

  it("Should search a movie into menu mobile", () => {
    const router = createMockRouter({});
    // provavelmente der erro
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
    const inputSearch = screen.getAllByPlaceholderText("Busca...")[1];

    userEvent.type(inputSearch, "batman");
    fireEvent.submit(inputSearch);

    expect(router.push).toHaveBeenCalledWith("/search/batman");
  });
});
