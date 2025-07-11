import { render, screen } from "@testing-library/react";

import Greet from "./Greet";

test("renders Greet and find Hello", () => {
  render(<Greet />);
  const pElement = screen.getByText(/hello/i);
  expect(pElement).toBeInTheDocument();
});
