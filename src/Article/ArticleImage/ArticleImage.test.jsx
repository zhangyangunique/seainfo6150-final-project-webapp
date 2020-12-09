import React from "react";
import { render } from "@testing-library/react";
import ArticleImage from "./ArticleImage";

const url = "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg";
const title = "test title"

describe("ArticleImage tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleImage url={url} title={title} />);
        expect(container).toMatchSnapshot();
    });
});