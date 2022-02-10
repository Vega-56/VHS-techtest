import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const TextAreaContainer = styled.div`
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
	textarea {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 10px 16px;

		position: static;
		width: 488px;
		left: calc(50% - 488px / 2);
		top: 14.63%;
		bottom: 0%;

		/* white/06.slight */

		background: rgba(240, 248, 255, 0.04);
		/* white/03.help */

		border: 1px solid rgba(240, 248, 255, 0.32);
		box-sizing: border-box;
		border-radius: 4px;

		/* Inside auto layout */

		flex: none;
		order: 1;
		align-self: stretch;
		flex-grow: 0;
		margin: 8px 0px;
	}
`;
export const TextAreaInput = ({ inputName, isRequired }) => {
	return (
		<TextAreaContainer>
			<label htmlFor={inputName}>
				{inputName}
				{isRequired ? "*" : ""}
			</label>
			<textarea name={inputName} id={inputName}></textarea>
		</TextAreaContainer>
	);
};

TextAreaInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
};
