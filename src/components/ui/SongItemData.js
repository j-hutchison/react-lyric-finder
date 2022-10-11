import React from "react";
import classes from "./SongItemData.module.css";

const SongItemData = ({ fieldName, fieldValue, icon }) => {
	return (
		<div className={classes["song-item-data"]}>
			<i className={`icon-small fa-solid fa-${icon}`}></i>{" "}
			<strong>{fieldName}: </strong> {fieldValue}
		</div>
	);
};

export default SongItemData;
