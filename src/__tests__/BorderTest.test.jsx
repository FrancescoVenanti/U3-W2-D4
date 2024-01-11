import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("onclick effect on books", () => {
	it("does the book border gets red after one click", () => {
		render(<App />);
		const bookList = screen.getAllByTestId("book-item");
		const firstBook = bookList[0];
		fireEvent.click(firstBook);
		console.log(firstBook);

		expect(firstBook).toHaveStyle("border: 3px solid red");
	});
});
