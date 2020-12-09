import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Error />);
        expect(container).toMatchSnapshot();
    });
});