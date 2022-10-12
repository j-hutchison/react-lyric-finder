import React, { useRef } from "react";
import classes from "./Search.module.css";
import SubmitButton from "../components/ui/SubmitButton";
import { searchForTrack } from "../data/SpotifyApIConfig";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Search = () => {
	const searchTerm = useRef("");
	const navigate = useNavigate();

	const handleSearchSubmit = async (event) => {
		event.preventDefault();
		console.log(searchTerm.current.value);

		const response = await searchForTrack(searchTerm.current.value);
		console.log(response);

		if (!response.success) {
			return;
		}

		navigate(`/tracks/${response.data.id}`);
	};

	return (
		<header className={`container border ${classes["search"]} rounded`}>
			<h1 className={classes["search-title"]}>
				<i className="icon-large fa-solid fa-music"></i> Search For A Song
			</h1>
			<p className={classes["search-description"]}>
				Enter the track name and artist to get lyrics
			</p>
			<form className={classes["search-form"]} onSubmit={handleSearchSubmit}>
				<input
					type="text"
					ref={searchTerm}
					name="search-bar"
					id="search-bar"
					className={`${classes["search-bar-input"]} rounded`}
				/>
				<SubmitButton label="Get Track Lyrics" />
			</form>
		</header>
	);
};

export default Search;
