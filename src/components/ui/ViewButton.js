import React from "react";
import classes from "./ViewButton.module.css";
import { Link } from "react-router-dom";

const ViewButton = (props) => {
	return (
		<Link
			to={`/tracks/${props.trackId}`}
			className={`rounded ${classes["view-button"]}`}
		>
			<i className="icon-small fa-solid fa-greater-than"></i> View Lyrics
		</Link>
	);
};

export default ViewButton;
