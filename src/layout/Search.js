import React from "react";
import classes from "./Search.module.css";
import SubmitButton from "../components/ui/SubmitButton";

const Search = () => {
	return (
		<header className={`container border ${classes["search"]} rounded`}>
			<h1 className={classes["search-title"]}>
				<i className="icon-large fa-solid fa-music"></i> Search For A Song
			</h1>
			<p className={classes["search-description"]}>
				Enter the track name and artist to get lyrics
			</p>
			<form className={classes["search-form"]}>
				<input
					type="text"
					name=""
					id=""
					className={`${classes["search-bar-input"]} rounded`}
				/>
				<SubmitButton label="Get Track Lyrics" />
			</form>
		</header>
	);
};

export default Search;
