import React from "react";
import { AccountDetails } from "./components/pages";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
	html {
		background: #22262d;
		color: rgba(240, 248, 255, 0.32);
		font-family: Montserrat, "Times New Roman";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		box-sizing: border-box;
		height: 100%;
	}
`;
function App() {
	return (
		<>
			<Global styles={GlobalStyles} />
			<AccountDetails />
		</>
	);
}

export default App;
