import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Are components mounting correctly", () => {
	it("Is Welcome Component mounting", () => {
		render(<App />);
		const welcome = screen.getByText(/Benvenuti in EpiBooks!/i);

		expect(welcome).toBeInTheDocument();
	});
});
