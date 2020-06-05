import React, { useState, useEffect, useRef } from "react";

import { Input } from "./style";

const InputFields = (props) => {
	const [active, setActive] = useState(false);
	const activeRef = useRef(null);

	const handleActive = () => {
		setActive(true);
	};

	useEffect(() => {
		if (active === true) {
			activeRef.current.style.border = "1px solid #DA7F16";
			activeRef.current.style.backgroundColor = "#3A3A3A;";
			activeRef.current.style.color = "#DA7F16";
		}
	}, [active]);

	return (
		<Input
			ref={activeRef}
			type={props.type}
			placeholder={props.placeholder}
			onFocus={handleActive}
		/>
	);
};

export default InputFields;
