import React from "react";
import classes from "./SubmitButton.module.css";

const SubmitButton = (props) => {
	return (
		<input
			type="submit"
			value={props.label}
			className={`rounded ${classes["btn-submit"]}`}
		/>
	);
};

export default SubmitButton;
