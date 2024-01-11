import { fireEvent, render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

describe("Is AllTheBooks working correctly", () => {
	it("are there books", () => {
		render(<AllTheBooks />);
		const bookList = screen.queryAllByTestId("book-item");

		expect(bookList.length).toBeGreaterThan(0);
	});

	it("Are there all the books", () => {
		render(<AllTheBooks />);
		const bookList = screen.queryAllByTestId("book-item");

		expect(bookList.length).toEqual(fantasy.length);
	});
});
