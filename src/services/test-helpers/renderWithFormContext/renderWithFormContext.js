import React from "react";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { render } from "@testing-library/react";
const MockedForm = ({ component }) => {
	const methods = useForm({ mode: "onBlur" });
	MockedForm.propTypes = {
		component: PropTypes.any,
	};
	return (
		<FormProvider {...methods}>
			<form>{component}</form>
		</FormProvider>
	);
};

export const renderWithFormContext = (component) => {
	return render(<MockedForm component={component}/>);
};