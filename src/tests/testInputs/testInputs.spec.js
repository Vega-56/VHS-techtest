import "@testing-library/jest-dom";
import React from "react";
import {
	fireEvent,
	getAllByText,
	getByRole,
	screen,
	waitFor,
} from "@testing-library/react";
// import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs/TextInput/TextInput";
import { renderWithFormContext } from "../../services/test-helpers";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
	beforeEach(() => {
		renderWithFormContext(<TextInput isValid={true} inputName="First Name" />);
	});
	it("Name of input should render", async () => {
		const label = screen.queryByText("First Name");

		expect(label).toBeInTheDocument();
	});
	it("Error message should occur when focus is lost", async () => {
		// fireEvent(getByRole("input"), blur);
		// fireEvent.focus(getByRole("input"));
		const label = screen.queryByText("First Name");

		expect(label).toBeInTheDocument();
		screen.getByLabelText("First Name").focus();
		label.focus();
		userEvent.tab();
		
		// const errorMessage = screen.getByText("This field is required");
		expect(label).toHaveFocus();

		// await waitFor(() => {
			expect(screen.findByText("This field is required")).toBeInTheDocument();
		// });
		// await screen.findByText("This field is required");
		// expect(errorMessage).toBeInTheDocument();
	});
});
