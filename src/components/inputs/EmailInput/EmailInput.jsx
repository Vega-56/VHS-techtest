import React from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { Label, ErrorMessage } from "../styledComponents";
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 100%;
	margin: 4px, 0;
`;

const Input = styled.input`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px 16px;

	width: 100%;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;

	/*Exact Figma Positioning*/

	/* white/06.slight */
	background: rgba(240, 248, 255, 0.04);
	/* white/03.help */
	color: #f0f8ff;

	border: 1px solid rgba(240, 248, 255, 0.32);
	box-sizing: border-box;
	border-radius: 4px;
	outline: none;
	&:hover {
		border: 1px solid #f0f8ff;
	}
	&:focus {
		border: 1px solid #27b18a;
	}
	&.error {
		border: 1px solid #e32636;
	}
`;

export const EmailInput = ({ inputName, isRequired }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<InputContainer>
			<Label className="label-text">
				{inputName}
				{isRequired ? "*" : ""}
			</Label>
			<Input
				type="email"
				className={
					errors[inputName]?.type === "required" ||
					errors[inputName]?.type === "pattern"
						? "error"
						: ""
				}
				{...register(inputName, {
					required: isRequired,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<ErrorMessage>
				{errors[inputName]?.type === "required" && "This field is required"}
				{errors[inputName]?.type === "pattern" && "Valid email is required"}
			</ErrorMessage>
		</InputContainer>
	);
};

EmailInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	// isValid: PropTypes.bool,
};
