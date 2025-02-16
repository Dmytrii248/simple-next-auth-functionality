import { render, screen } from "@testing-library/react";
import { AuthProvider } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};

(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("AuthProvider", () => {
  it("should render children", () => {
    render(
      <AuthProvider>
        <div>Test Child</div>
      </AuthProvider>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
