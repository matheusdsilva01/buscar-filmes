import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Test component footer", () => {
  it("Should render component footer", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
