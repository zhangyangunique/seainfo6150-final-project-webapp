import React from "react";
import { render } from "@testing-library/react";
import ArticleDetailPage from "./ArticleDetailPage";

const slug = "181122102925-statue-of-liberty-crown";

describe("ArticleDetailPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleDetailPage slug={slug} />);
        expect(container).toMatchSnapshot();
    });
});