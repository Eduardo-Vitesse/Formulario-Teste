import React, { useState, useEffect, useRef } from "react";

import { Input } from "./style";

const InputFields = (props) => {
	const [active, setActive] = useState(false);
	const activeRef = useRef(null);

	const handleActive = () => {
		console.log(activeRef);
	};

	useEffect(() => {
		setActive(active);
	}, []);

	return (
		<Input
			ref={activeRef}
			type={props.type}
			placeholder={props.placeholder}
			onClick={handleActive}
		/>
	);
};

export default InputFields;
