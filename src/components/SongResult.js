import React from "react";
import classes from "./SongResult.module.css";
import SongItemData from "./ui/SongItemData";
import ViewButton from "./ui/ViewButton";

const SongResult = ({ artist, track, album }) => {
	return (
		<div className={`border ${classes["song-result"]}`}>
			<h3 className={classes["song-result-artist"]}>{artist}</h3>
			<SongItemData fieldName="Track" fieldValue={track} />
			<SongItemData fieldName="Album" fieldValue={album} />
			<ViewButton />
		</div>
	);
};

export default SongResult;
