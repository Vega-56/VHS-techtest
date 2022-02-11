import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { mockForm } from "../../../utils/mocks/mockForm/mockForm";
import TextInput from "./TextInput";

describe("TextInput", () => {
	it("Should show error message when field is invalid", async () => {
		mockForm(<TextInput />);
		expect(await screen.queryByText("Valid").toBeInTheDocument());
	});
});
