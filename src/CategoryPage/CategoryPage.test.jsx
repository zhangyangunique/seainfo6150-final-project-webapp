import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import CategoryPage from "./CategoryPage";

const categoryId = "sport";

describe("CategoryPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(
            <BrowserRouter>
                <CategoryPage categoryId={categoryId} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});