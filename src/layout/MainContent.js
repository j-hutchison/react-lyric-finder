import React, { useState, useEffect } from "react";
import classes from "./MainContent.module.css";
import SongResult from "../components/SongResult";
import { getTop10 } from "../data/SpotifyApIConfig";

const MainContent = ({ title }) => {
	const songs = [
		{ artist: "Eminem", track: "Without Me", album: "The Eminem Show" },
		{ artist: "Michael Jackson", track: "Bad", album: "Bad" },
		{ artist: "Tupac", track: "Changes", album: "Greatest Hits" },
	];
	const [results, setResults] = useState("Loading...");

	useEffect(() => {
		const getTopTracks = async () => {
			const response = await getTop10();
			if (!response.ok) {
				setResults(() => "Error Occurred getting top tracks");
			}

			setResults(() => response);
		};
		getTopTracks();
	}, []);

	return (
		<main className={`container ${classes["main-content"]}`}>
			<h2 className={classes["main-title"]}>{title}</h2>
			{typeof results === "string" && (
				<p className={classes["loading-text"]}>{results}</p>
			)}
			<div className={classes["song-grid"]}>
				{Array.isArray(results) > 0 &&
					results.map((result) => {
						return (
							<SongResult
								key={result.id}
								id={result.id}
								artist={result.artist}
								track={result.track}
								album={result.album}
							/>
						);
					})}
			</div>
		</main>
	);
};

export default MainContent;
