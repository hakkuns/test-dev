import { render, screen } from "@testing-library/react";
import { Child2 } from "./Child2";

describe("Child2", () => {
	it("should render Child2", () => {
		render(<Child2 />);
		expect(screen.getByText("Child2")).toBeInTheDocument();
	});
});
