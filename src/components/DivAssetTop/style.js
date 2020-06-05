import styled from "styled-components";

export const DivTop = styled.div`
	& {
		width: 112px;
		height: 20px;
		background-color: #da7f16;
		position: relative;
		transform: rotate(180deg);
	}
	&::after,
	&::before {
		content: "";
		position: absolute;
		width: 50px;
		height: 50px;
		top: -25px;
		background-color: #3a3a3a;
	}
	&::after {
		left: -35px;
		transform: rotate(-45deg);
	}
	&::before {
		right: -35px;
		transform: rotate(-45deg);
	}
`;
