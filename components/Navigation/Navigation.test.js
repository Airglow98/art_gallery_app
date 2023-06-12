import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import Link from "next/link";

test("render navigation spotlight-link", () => {
  render(<Navigation />);
  const navLink = screen.getByRole("link", { href: "/" });
  expect(navLink).toBeInTheDocument("/");
});
