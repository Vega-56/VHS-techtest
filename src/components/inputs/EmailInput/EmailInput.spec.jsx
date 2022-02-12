import "@testing-library/jest-dom";
import React from "react";
import { screen } from "@testing-library/react";

import { EmailInput } from "./EmailInput";
import { renderWithFormContext } from "../../../services/test-helpers";
describe("EmailInput", () => {
	const inputName = "First Name";

	beforeEach(() => {
		renderWithFormContext(<EmailInput isValid={true} inputName={inputName} />);
	});

	it("Input Component should render without on-screen error message by default", async () => {
		const label = screen.queryByText(inputName);

		expect(label).toBeInTheDocument();
		expect(
			screen.queryByText("This field is required")
		).not.toBeInTheDocument();
	});

	// Can't get test for Error Message Appearance to Work

	// it("Error message should occur when focus is lost", async () => {
	// 	// fireEvent(getByRole("input"), blur);
	// 	// fireEvent.focus(getByRole("input"));
	// 	const label = screen.queryByText("First Name");

	// 	expect(label).toBeInTheDocument();
	// 	screen.getByLabelText("First Name").blur();

	// 	// const { rerender } = renderWithFormContext(
	// 	// 	<TextInput isValid={true} inputName="First Name" />
	// 	// );
	// 	// rerender();
	// 	await waitFor(() => {
	// 		expect(screen.queryByText("This field is required")).toBeInTheDocument();
	// 	});
	// });
});
