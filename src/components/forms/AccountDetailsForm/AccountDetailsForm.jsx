import React from "react";

import {
	DateInput,
	TextAreaInput,
	TextInput,
	PhoneInput,
	EmailInput,
} from "../../inputs";
import styled from "@emotion/styled";

import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import successIcon from "../../../assets/toastIcons/icontoastconfirm.svg";
const FormContainer = styled.form`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
`;
const FormTitle = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 1.5rem;
	line-height: 2rem;
	letter-spacing: 0.1px;

	color: #f0f8ff;
`;

const Divider = styled.hr`
	background: rgba(240, 248, 255, 0.1225);
	height: 1px;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	margin: 2rem 0px;
	border: none;
`;

const BtnContainer = styled.div`
	/* or 150% */

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;

	width: 100%;
	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
	margin: 0 0px 2rem 0;
`;

const SubmitBtn = styled.button`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #f0f8ff;
	/* Gradients/Green Button */
	width: 33%;
	height: 100%;

	background: linear-gradient(90deg, #27b18a 0%, #317d6c 100%);
	box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
	border-radius: 8px;
	border: none;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0 0.5rem 0 0;

	&:active {
		border: 0.1px solid gray;
		box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
	}
`;

const DiscardBtn = styled.button`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #f0f8ff;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 24px;

	/* White/Help */
	background: rgba(240, 248, 255, 0.32);

	border-radius: 8px;
	border: none;

	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
	margin: 0px 0.5rem;

	&:active {
		border: 0.1px solid gray;
		box-shadow: 0px 0px 8px rgba(235, 18, 2, 0.33);
	}
`;

const SuccessMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const AccountDetailsForm = () => {
	const methods = useForm({ mode: "onBlur" });

	const notify = () => {
		toast(
			<SuccessMessage>
				<img src={successIcon} />
				<div>Changes Have Been Saved Sucessfully</div>
			</SuccessMessage>
		);
	};
	const handleClick = (event) => {
		event.preventDefault();
	};
	const onSubmit = (data) => {
		console.log(data);
		notify();
	};

	return (
		<FormProvider {...methods}>
			<FormContainer
				name="account-details"
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				<FormTitle>Settings</FormTitle>
				<TextInput inputName="First Name" isRequired={true} />
				<TextInput inputName="Last Name" isRequired={true} />

				<EmailInput inputName="Email" isRequired={true} />
				<PhoneInput inputName="Number" isRequired={true} />
				<DateInput inputName="Select your date of birth" isRequired={true} />
				<TextAreaInput inputName="Bio" isRequired={true} />
				<Divider />
				<BtnContainer>
					<SubmitBtn>Save Changes</SubmitBtn>
					<DiscardBtn onClick={handleClick}>Discard</DiscardBtn>
				</BtnContainer>
			</FormContainer>
		</FormProvider>
	);
};
