import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("is the searchbar working", () => {
	it("first search", () => {
		render(<App />);
		/* const user = userEvent.setup(); */

		const inputField = screen.getByPlaceholderText(/cerca un libro/i);
		fireEvent.change(inputField, { target: { value: "stiletto" } });

		/* user.type(inputField, "stiletto"); */
		const filteredItem = screen.queryAllByTestId("book-item");
		expect(filteredItem).toHaveLength(1);
	});
});
