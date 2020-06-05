import React from "react";

//import DivAssetTop from "../../components/DivAssetTop";
import InputsFields from "../../components/Inputs";
import SubmitButton from "../../components/Button";

import { Section, Wrapper, FormFields, IconBotton, IconTop } from "./style";

import assetBotton from "../../assets/rectangle-3.png";
import assetTop from "../../assets/rectangle-4.png";

const Form = () => {
	return (
		<>
			<Section>
				<Wrapper>
					{/* <DivAssetTop /> */}
					<IconTop src={assetTop} />
					<FormFields autoComplete="off">
						<InputsFields type="email" placeholder="EMAIL" />
						<InputsFields type="password" placeholder="SENHA" />
						<SubmitButton />
					</FormFields>
				</Wrapper>
				<IconBotton src={assetBotton} />
			</Section>
		</>
	);
};

export default Form;
