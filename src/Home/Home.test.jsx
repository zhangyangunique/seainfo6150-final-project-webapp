import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});