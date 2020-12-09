import React from "react";
import { render } from "@testing-library/react";
import Comment from "./Comment";

describe("Comment tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Comment />);
        expect(container).toMatchSnapshot();
    });
});