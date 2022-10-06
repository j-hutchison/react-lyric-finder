import React from "react";
import classes from "./Searchbar.module.css";
import SubmitButton from "../components/ui/SubmitButton";

const Searchbar = () => {
	return (
		<header className={`container border ${classes["search"]} rounded`}>
			<h1 className={classes["search-title"]}>Search For A Song</h1>
			<p className={classes["search-description"]}>
				Get the lyrics for any track
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

export default Searchbar;
