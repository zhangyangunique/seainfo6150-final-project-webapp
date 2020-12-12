import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import CategorySelectPage from "./CategorySelectPage";

describe("CategorySelectPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(
            <BrowserRouter>
                <CategorySelectPage />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});