import React, { useState, useEffect, useContext } from "react";
import classes from "./MainContent.module.css";
import SongResult from "../components/SongResult";
import { getTop10 } from "../data/SpotifyApIConfig";
import { SearchContext } from "../context/ContextProvider";

const MainContent = ({ title }) => {
	// const [results, setResults] = useState("Loading...");
	const searchCtx = useContext(SearchContext);

	useEffect(() => {
		const getTopTracks = async () => {
			const response = await getTop10();
			if (!response.ok) {
				searchCtx.setResults(() => "Error Occurred getting top tracks");
			}

			searchCtx.setResults(() => response);
		};
		getTopTracks();
	}, []);

	return (
		<main className={`container ${classes["main-content"]}`}>
			<h2 className={classes["main-title"]}>{searchCtx.title}</h2>
			{typeof results === "string" && (
				<p className="loading-text">{searchCtx.results}</p>
			)}
			<div className={classes["song-grid"]}>
				{Array.isArray(searchCtx.results) > 0 &&
					searchCtx.results.map((result) => {
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
