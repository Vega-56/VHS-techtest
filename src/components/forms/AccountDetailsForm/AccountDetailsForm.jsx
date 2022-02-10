import React from "react";

import {
	DateInput,
	TextAreaInput,
	TextInput,
	PhoneInput,
	EmailInput,
} from "../../inputs";
import styled from "@emotion/styled";
import { useState } from "react/cjs/react.development";

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	position: absolute;
	width: 489px;
	height: 867px;
	left: 460px;
	top: 132px;
	outline: none;

	h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 32px;
		/* identical to box height, or 133% */

		letter-spacing: 0.1px;

		color: #f0f8ff;
	}

	hr {
		position: static;
		width: 489px;
		left: calc(50% - 489px / 2);
		top: 0%;
		bottom: 98.67%;

		background: rgba(240, 248, 255, 0.1225);

		/* Inside auto layout */

		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 0;
		margin: 30px 0px;
	}
`;

const BtnContainer = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	/* or 150% */

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;

	position: static;
	width: 489px;
	height: 75px;
	left: 0px;
	top: 792px;

	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
	margin: 40px 0px;
`;

const SubmitBtn = styled.button`
	width: 167px;
	height: 44px;
	left: 0px;
	top: 0px;

	/* Gradients/Green Button */

	background: linear-gradient(90deg, #27b18a 0%, #317d6c 100%);
	box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
	border-radius: 8px;

	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 16px;
`;

const DiscardBtn = styled.button`
	width: 113px;
	height: 44px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 24px;

	/* White/Help */

	background: rgba(240, 248, 255, 0.32);
	border-radius: 8px;

	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
	margin: 0px 16px;
`;
export const AccountDetailsForm = () => {
	const [isValid, setIsValid] = useState({ firstName: false });

	const handleBlur = (fields) => {
		setIsValid(fields);
	};

	const validateFields = () => {
		if (isValid.firstName) {
			// Toast notification
			setIsValid((prev) => {
				return { ...prev, firstName: false };
			});
		}
	};

	return (
		<FormContainer>
			<h1>Settings</h1>
			<TextInput
				inputName="First Name"
				isRequired={true}
				isValid
				handleBlur={() => handleBlur}
			/>
			<TextInput inputName="Last Name" isRequired={true} />

			<EmailInput
				inputName="Email"
				isRequired={true}
				// isValid={isValid.email}
			/>
			<PhoneInput
				inputName="Number"
				isRequired={true}
				// isValid={isValid.phone}
			/>
			<DateInput inputName="Select your date of birth" isRequired={true} />
			<TextAreaInput inputName="Bio" isRequired={true} />
			<hr />
			<BtnContainer>
				<SubmitBtn onSubmit={validateFields}>Save Changes</SubmitBtn>
				<DiscardBtn>Discard</DiscardBtn>
			</BtnContainer>
		</FormContainer>
	);
};
