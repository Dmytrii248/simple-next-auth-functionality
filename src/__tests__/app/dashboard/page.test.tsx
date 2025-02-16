import { render, screen } from "@testing-library/react";
import Dashboard from "@/app/dashboard/page";

describe("Dashboard Page", () => {
  it("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", {
      name: /Dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
