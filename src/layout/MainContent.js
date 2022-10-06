import React from "react";
import classes from "./MainContent.module.css";
import SongResult from "../components/SongResult";

const MainContent = ({ title }) => {
	return (
		<main className={`container ${classes["main-content"]}`}>
			<h2 className={classes["main-title"]}>{title}</h2>
			<div className={classes["song-grid"]}>
				<SongResult
					artist="Artist Name 1"
					track="Track Name 1"
					album="Album Name 1"
				/>
				<SongResult
					artist="Artist Name 2"
					track="Track Name 2"
					album="Album Name 2"
				/>
				<SongResult
					artist="Artist Name 3"
					track="Track Name 3"
					album="Album Name 3"
				/>
			</div>
		</main>
	);
};

export default MainContent;
