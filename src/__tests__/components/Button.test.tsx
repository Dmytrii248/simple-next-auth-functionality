import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components";

describe("Button component", () => {
  test("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with correct styles", () => {
    render(<Button>Styled Button</Button>);
    const button = screen.getByText("Styled Button");
    expect(button).toHaveClass(
      "px-2 py-1 border rounded-md border-gray-500 text-white bg-slate-500"
    );
  });
});
