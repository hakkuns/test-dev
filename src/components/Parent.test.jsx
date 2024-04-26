import { render, screen } from "@testing-library/react";
import { Parent } from "./Parent";

describe("Parent", () => {
	it("should render Parent", () => {
		render(<Parent />);
		expect(screen.getByText("Parent")).toBeInTheDocument();
	});
});
