import React from "react";
import classes from "./ViewButton.module.css";

const ViewButton = (props) => {
	return (
		<button className={`rounded ${classes["view-button"]}`}>
			<i class="fa-solid fa-greater-than"></i> View Lyrics
		</button>
	);
};

export default ViewButton;
