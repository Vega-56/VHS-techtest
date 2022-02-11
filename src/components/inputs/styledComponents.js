import styled from "@emotion/styled";

const Label = styled.label`
	font-weight: bold;
	font-size: 12px;
	line-height: 1rem;

	text-transform: uppercase;

	letter-spacing: 0.857143px;
	margin: 0.25rem 0;
`;

const ErrorMessage = styled.span`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;

	letter-spacing: 0.2475px;

	color: #e32636;
	mix-blend-mode: normal;

	/* Exact Positioning From Figma */
	position: static;
	height: 16px;
	left: 0px;
	right: 0px;
	bottom: 0px;

	flex: none;
	order: 2;
	align-self: stretch;
	flex-grow: 0;
	margin: 0.25rem 0px;
`;

export { Label, ErrorMessage };
