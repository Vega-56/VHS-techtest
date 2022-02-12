import React from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { Label, ErrorMessage } from "../styledComponents";
const InputContainer = styled.div`
	width: 100%;

	/* white/02.secondary */
	color: rgba(240, 248, 255, 0.64)

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	position: static;
	left: 0%;
	right: 0%;
	top: 8.51%;
	bottom: 79.26%;

	/* Inside auto layout */

	flex-grow: 0;
	margin: 4px 0px;
`;

const Input = styled.input`
	font-family: Montserrat, "Times New Roman";
	padding: 10px 16px;
	font-size: 16px;
	line-height: 24px;

	/* white/06.slight */
	background: rgba(240, 248, 255, 0.04);
	/* white/03.help */
	color: #f0f8ff;
	border: 1px solid rgba(240, 248, 255, 0.32);
	box-sizing: border-box;
	border-radius: 4px;

	flex: none;
	order: 1;
	align-self: stretch;
	flex-grow: 0;

	/* Outline/Highlighting */
	outline: none;
	:focus {
		border: 1px solid #27b18a;
	}

	&:hover {
		border: 1px solid #f0f8ff;
	}
	&.error {
		border: 1px solid #e32636;
	}
`;

export const TextInput = ({ inputName, isRequired, defaultValue }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<InputContainer>
			<Label htmlFor={inputName}>
				{inputName}
				{isRequired ? "*" : ""}
			</Label>
			<Input
				name={inputName}
				id={inputName}
				type="text"
				defaultValue={defaultValue}
				className={errors[inputName]?.type === "required" ? "error" : ""}
				{...register(inputName, {
					required: isRequired,
				})}
			/>
			<ErrorMessage>
				{errors[inputName]?.type === "required" && "This field is required"}
			</ErrorMessage>
		</InputContainer>
	);
};

TextInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	defaultValue: PropTypes.string,
};
