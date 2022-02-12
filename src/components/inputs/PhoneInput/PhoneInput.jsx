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
	margin: 4px 0;
`;
const Input = styled.input`
	font-family: Montserrat, "Times New Roman";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;

	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px 16px;

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

export const PhoneInput = ({ inputName, isRequired, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<InputContainer>
			<Label type="tel" className="label-text">
				{inputName}
				{isRequired ? "*" : ""}
			</Label>
			<Input
				type="number"
				defaultValue={defaultValue}
				className={
					errors[inputName]?.type === "required" ||
					errors[inputName]?.type === "maxLength"
						? "error"
						: ""
				}
				{...register(inputName, {
					required: isRequired,
					maxLength: 12,
				})}
			/>
			<ErrorMessage>
				{errors[inputName]?.type === "required" && "This field is required"}
				{errors[inputName]?.type === "maxLength" &&
					"Valid number is required (12 digits max)"}
			</ErrorMessage>
		</InputContainer>
	);
};

PhoneInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	defaultValue: PropTypes.number,
};
