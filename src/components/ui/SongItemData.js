import React from "react";
import classes from "./SongItemData.module.css";

const SongItemData = ({ fieldName, fieldValue }) => {
	return (
		<div className={classes["song-item-data"]}>
			<strong>{fieldName}: </strong> {fieldValue}
		</div>
	);
};

export default SongItemData;
