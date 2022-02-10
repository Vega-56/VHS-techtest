import React from "react";
import { AccountDetailsForm } from "../../forms";
import { UserImageInput } from "../../inputs";
import styled from "@emotion/styled";

const PageContainer = styled.div`
	background: #22262d;
	position: relative;
	width: 1920px;
	height: 1159px;
`;
export const AccountDetails = () => {
	return (
		<PageContainer>
			<AccountDetailsForm> </AccountDetailsForm>
			<UserImageInput />
		</PageContainer>
	);
};
