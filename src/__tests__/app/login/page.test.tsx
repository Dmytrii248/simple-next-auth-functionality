import { render, screen } from "@testing-library/react";
import Login from "@/app/login/page";

describe("Login Page", () => {
  it("renders a heading", () => {
    render(<Login />);

    const heading = screen.getByRole("heading", {
      name: /Login/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
