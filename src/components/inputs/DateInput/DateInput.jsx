import React from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
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
			<option className="option" value={index + 1} key={index}>
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
	* {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		/* or 150% */

		/* white/02.secondary */

		color: rgba(240, 248, 255, 0.64);
	}
	#month,
	#day,
	#year,
	option {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 10px 16px;

		color: #f0f8ff;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
	#month {
		width: 176px;
		left: calc(50% - 176px / 2 - 155.5px);
		top: 35.29%;
		bottom: 0%;

		/* white/06.slight */

		background: rgba(240, 248, 255, 0.04);
		/* white/03.help */

		border: 1px solid rgba(240, 248, 255, 0.32);
		box-sizing: border-box;
		border-radius: 4px;
	}

	#day {
		/* White / Slight White */

		background: rgba(240, 248, 255, 0.04);
		/* White/Help */

		border: 1px solid rgba(240, 248, 255, 0.32);
		box-sizing: border-box;
		border-radius: 4px;
	}

	#year {
		position: static;
		width: 137px;
		left: calc(50% - 137px / 2);
		top: 0%;
		bottom: 0%;

		/* White / Slight White */

		background: rgba(240, 248, 255, 0.04);
		/* White/Help */

		border: 1px solid rgba(240, 248, 255, 0.32);
		box-sizing: border-box;
		border-radius: 4px;
	}
	option {
		padding: 8px 0px;

		background: #3a3f46;
		/* White / Decorative */

		border: 1px solid rgba(240, 248, 255, 0.12);
		box-sizing: border-box;
		/* shadow */

		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
		border-radius: 4px;
	}

	select::-webkit-scrollbar {
		width: 5px;
		height: 8px;
		background-color: #aaa; /* or add it to the track */
	}

	.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
		background: #000;
	}
`;
export const DateInput = ({ inputName, isRequired }) => {
	return (
		<DateInputContainer>
			<label>
				{inputName}
				{isRequired ? "*" : ""}
			</label>
			<div>
				<select name="month" id="month">
					{monthOptions()}
				</select>

				<select name="day" id="day">
					{dayOptions()}
				</select>

				<select name="year" id="year">
					{yearOptions()}
				</select>
			</div>
		</DateInputContainer>
	);
};

DateInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	isValid: PropTypes.bool,
};
