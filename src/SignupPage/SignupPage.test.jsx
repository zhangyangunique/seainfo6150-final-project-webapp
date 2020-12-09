import React from "react";
import { render } from "@testing-library/react";
import SignupPage from "./SignupPage";

describe("SignupPage tests", () => {
    it("renders correctly", () => {
        const { container } = render(<SignupPage />);
        expect(container).toMatchSnapshot();
    });
});