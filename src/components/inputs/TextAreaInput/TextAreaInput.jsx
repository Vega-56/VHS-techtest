import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { Label, ErrorMessage } from "../styledComponents";
const TextAreaContainer = styled.div`
	margin: 4px 0;
	width: 100%;
`;

const TextArea = styled.textarea`
	font-family: Montserrat, "Times New Roman";
	padding: 10px 16px;
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

	/* Inside auto layout */

	flex: none;
	order: 1;
	align-self: stretch;
	flex-grow: 0;

	outline: none;
	resize: none;

	&:focus {
		border: 1px solid #27b18a;
	}

	&:hover {
		border: 1px solid #f0f8ff;
	}
	&.error {
		border: 1px solid #e32636;
	}

	&::-webkit-scrollbar {
		width: 10px;
		background: rgba(240, 248, 255, 0.04);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(240, 248, 255, 0.12);
		border-radius: 3.5px;
	}
`;
export const TextAreaInput = ({ inputName, isRequired }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<TextAreaContainer>
			<Label>
				{inputName}
				{isRequired ? "*" : ""}
			</Label>
			<TextArea
				name={inputName}
				id={inputName}
				className={errors[inputName]?.type === "required" ? "error" : ""}
				{...register(inputName, {
					required: isRequired,
				})}
			></TextArea>
			<ErrorMessage>
				{errors[inputName]?.type === "required" && "This field is required"}
			</ErrorMessage>
		</TextAreaContainer>
	);
};

TextAreaInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
};
