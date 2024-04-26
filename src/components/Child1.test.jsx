import { render, screen } from "@testing-library/react";
import { Child1 } from "./Child1";

describe("Child1", () => {
	it("should render Child1", () => {
		render(<Child1 />);
		expect(screen.getByText("Child1")).toBeInTheDocument();
	});
});
