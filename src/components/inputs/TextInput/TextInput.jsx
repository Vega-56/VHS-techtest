import React from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

const InputContainer = styled.div`
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
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	label {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 16px;

		text-transform: uppercase;

		color: rgba(240, 248, 255, 0.32);
		letter-spacing: 0.857143px;
	}

	input {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 10px 16px;

		position: static;
		width: 488px;
		left: calc(50% - 488px / 2);
		top: 35.29%;
		bottom: 0%;

		/* white/06.slight */

		background: rgba(240, 248, 255, 0.04);
		/* white/03.help */

		color: #f0f8ff;
		border: 1px solid rgba(240, 248, 255, 0.32);
		box-sizing: border-box;
		border-radius: 4px;

		outline: none;

		&:focus {
			border: 1px solid #27b18a;
		}

		&:hover {
			border: 1px solid #f0f8ff;
		}
	}
`;

// const errorMessage = styled.span``;
export const TextInput = ({ inputName, isRequired }) => {
	// const [showValidStyling, setShowValidStyling] = useState(false);
	// const handleBlur = (event) => {
	// 	if (!event.target.value.length || event.target.value.length <= 0) {
	// 		setShowValidStyling(false);
	// 		setIsValid({});
	// 	}

	// 	// isValid ? setShowValidStyling(false) : setShowValidStyling(true);
	// 	console.log(isValid);
	// };
	const { register, getFieldState } = useFormContext();

	return (
		<InputContainer>
			<label>
				{inputName}
				{isRequired ? "*" : ""}
			</label>
			<input
				type="text"
				{...register(inputName, {
					required: isRequired,
				})}
			/>
			{/* {errors[inputName]?.type === "required" && "This field is required"} */}
			<span>
				{getFieldState(inputName).invalid && "This field is required"}
			</span>
		</InputContainer>
	);
};

TextInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
	isValid: PropTypes.bool,
	setIsValid: PropTypes.func,
};
