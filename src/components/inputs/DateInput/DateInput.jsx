import React from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { Label, ErrorMessage } from "../styledComponents";
const monthOptions = () => {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return monthNames.map((month, index) => {
		return (
			<option className="option" value={index + 1} key={index + 1}>
				{month}
			</option>
		);
	});
};
const yearOptions = () => {
	const options = [];
	const minYear = 1900;
	const currYear = new Date().getFullYear();
	for (let i = currYear; i > minYear; i--) {
		options.push(
			<option value={i} key={i}>
				{i}
			</option>
		);
	}

	return options;
};

const dayOptions = () => {
	const options = [];
	for (let i = 1; i < 32; i++) {
		options.push(
			<option value={i} key={i}>
				{i}
			</option>
		);
	}

	return options;
};

const DateInputContainer = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;

	width: 100%;

	margin: 4px 0;
`;

const SelectContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const DateSelect = styled.select`
	font-family: Montserrat, "Times New Roman";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px 16px;

	border: 1px solid rgba(240, 248, 255, 0.32);
	border-radius: 4px;

	background: rgba(240, 248, 255, 0.04);
	color: #f0f8ff;

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

	&::-webkit-scrollbar {
		width: 10px;
		background: #3a3f46;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(240, 248, 255, 0.12);
		border-radius: 3.5px;
	}

	option {
		background: #3a3f46;
		&[disabled] {
			display: none;
			color: rgba(240, 248, 255, 0.32);
		}
	}
`;

export const DateInput = ({ inputName, isRequired }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<DateInputContainer>
			<Label>
				{inputName}
				{isRequired ? "*" : ""}
			</Label>

			<SelectContainer className="select-container">
				<DateSelect
					name="month"
					defaultValue="month"
					className={
						"date-input " +
						(errors["month"]?.type === "required" ? "error" : "")
					}
					{...register(`month`, {
						required: isRequired,
					})}
				>
					{monthOptions()}
				</DateSelect>

				<DateSelect
					name="day"
					className={
						"date-input " + (errors["day"]?.type === "required" ? "error" : "")
					}
					{...register(`day`, {
						required: isRequired,
					})}
				>
					{dayOptions()}
				</DateSelect>

				<DateSelect
					name="year"
					className={
						"date-input " + (errors["year"]?.type === "required" ? "error" : "")
					}
					{...register(`year`, {
						required: isRequired,
					})}
				>
					{yearOptions()}
				</DateSelect>
			</SelectContainer>
			<ErrorMessage>
				{errors["month"]?.type === "required" && "This field is required"}
			</ErrorMessage>
		</DateInputContainer>
	);
};

DateInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	isValid: PropTypes.bool,
};
