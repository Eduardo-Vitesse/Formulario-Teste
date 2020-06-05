import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: #2d2d2d;

	@media (max-width: 500px) {
		section {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		div {
			width: 100%;
			height: 100vh;
		}

		img {
			display: none;
		}

		input,
		button {
			width: 100%;
		}
	}
`;

export const Wrapper = styled.section`
	width: 444px;
	height: 400px;
	background: #3a3a3a;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0;
`;

export const FormFields = styled.form`
	width: auto;
	height: auto;
	background: #3a3a3a;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 48px;
`;

export const IconTop = styled.img`
	margin: 0 auto;
`;

export const IconBotton = styled.img`
	margin-left: -12px;
`;
