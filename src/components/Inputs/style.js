import styled from "styled-components";

export const Input = styled.input`
	width: 348px;
	height: 71px;
	font-weight: 800;
	font-size: 18px;
	padding-left: 15px;
	font-family: "Montserrat", sans-serif;
	border: ${({ focus, filled }) =>
		focus
			? "1px solid #DA7F16"
			: filled
			? "1px solid #fff"
			: "1px solid #868686"};
	color: ${({ focus }) => (focus ? "#DA7F16" : "#ffffff")};
	background: #3a3a3a;

	&:nth-child(2) {
		margin-top: 37px;
	}
`;
