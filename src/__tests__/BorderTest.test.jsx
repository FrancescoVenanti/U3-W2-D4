import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("onclick effect on books", () => {
	it("does the book border gets red after one click", () => {
		render(<App />);
		const bookList = screen.queryAllByTestId("book-item");
		const book1 = bookList[1];
		fireEvent.click(book1);

		expect(book1.style.borderColor).toBe("red");
	});
});
