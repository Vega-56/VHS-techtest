import React from "react";
import { AccountDetailsForm } from "../../forms";
import { UserImageInput } from "../../inputs";
import styled from "@emotion/styled";

const PageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #22262d;
	font-family: Montserrat;
	font-style: normal;
`;

const AccountSection = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	font-family: Montserrat;
	font-style: normal;
	margin: 2rem 5rem;
`;
const ImageSection = styled.div`
	display: flex;
	width: 50%;
	height: 100vh;
	font-family: Montserrat;
	font-style: normal;
	margin: 10rem 5rem 2rem 5rem;
`;
export const AccountDetails = () => {
	return (
		<PageContainer>
			<AccountSection>
				<AccountDetailsForm />
			</AccountSection>
			<ImageSection>
				<UserImageInput inputName="Image" />
			</ImageSection>
		</PageContainer>
	);
};
