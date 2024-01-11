import { fireEvent, render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Is CommentArea mounted correctly", () => {
	it("is CommentArea mounting", () => {
		render(<CommentArea />);
		const commentArea = screen.getByText("Clicca per vedere i commenti");

		expect(commentArea).toBeInTheDocument();
	});
});
