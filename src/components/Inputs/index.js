import React, { useState } from "react";

import { Input } from "./style";

const InputFields = (props) => {
	const [focus, setFocus] = useState(false);
	const [filled, setFilled] = useState(false);

	return (
		<Input
			type={props.type}
			placeholder={props.placeholder}
			focus={focus}
			filled={filled}
			onFocus={() => {
				setFocus(true);
			}}
			onBlur={(e) => {
				setFocus(false);
				if (e.target.value) {
					setFilled(true);
				} else {
					setFilled(false);
				}
			}}
		/>
	);
};

export default InputFields;
