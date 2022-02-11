import React from "react";
import { AccountDetailsForm } from "../../forms";
import { UserImageInput } from "../../inputs";
import styled from "@emotion/styled";
import { ConfirmToast } from "../../toasts";
const PageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	background: #22262d;
	font-family: Montserrat;
	font-style: normal;
`;

const Sections = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const AccountSection = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	font-family: Montserrat;
	font-style: normal;
	margin: 2rem 0 2rem 4rem;
`;
const ImageSection = styled.div`
	display: flex;
	width: 50%;
	height: 100vh;
	justify-content: center;
	font-family: Montserrat;
	font-style: normal;
	margin: 2rem 4rem 2rem 0;
`;
export const AccountDetails = () => {
	return (
		<PageContainer>
			<ConfirmToast />
			<Sections>
				<AccountSection>
					<AccountDetailsForm />
				</AccountSection>
				<ImageSection>
					<UserImageInput inputName="Image" />
				</ImageSection>
			</Sections>
		</PageContainer>
	);
};
