import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./AboutPage";

describe("AboutPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(<AboutPage />);
        expect(container).toMatchSnapshot();
    });
});