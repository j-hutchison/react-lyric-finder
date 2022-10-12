import React, { useState, useEffect } from "react";
import LogoBanner from "../components/LogoBanner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Track.module.css";
import LoadingSpinner from "../components/ui/LoadingSpinner";

import { getTrackById } from "../data/SpotifyApIConfig";

const Track = (props) => {
	let params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [trackInfo, setTrackInfo] = useState({});
	const [lyrics, setLyrics] = useState([]);

	useEffect(() => {
		const requestTrackById = async (trackId) => {
			const response = await getTrackById(trackId);
			if (!response.ok) {
				setTrackInfo(() => "Error Occurred getting top tracks");
			}
			console.log(response);
			const trackDetails = {
				name: response.track.name,
				artist: response.track.artists[0].name,
				album: response.track.album.name,
				albumId: response.track.album.id,
				genre: "Unassigned",
				explicit: response.track.explicit ? "Yes" : "No",
			};

			setTrackInfo(() => trackDetails);
			setLyrics(() => response.lyrics);
			setIsLoading(() => false);
		};

		if (params.trackId) {
			requestTrackById(params.trackId);
		}
	}, []);

	return (
		<div className={classes["tracks"]}>
			<LogoBanner />
			{isLoading && <LoadingSpinner />}
			{!isLoading && (
				<main className={`container ${classes["track-content"]}`}>
					<Link to={`/`} className={`rounded ${classes["back-button"]}`}>
						Go Back
					</Link>
					<div className={`border ${classes["track-content-table"]}`}>
						<span
							className={`${classes["border-bottom"]} ${classes["table-header-row"]}`}
						>
							<strong>{trackInfo.name} -</strong> {trackInfo.artist}
						</span>
						<p className={classes["track-lyrics"]}>
							{lyrics.map((line) => {
								return `${line.words}\n`;
							})}
						</p>
					</div>
					<div className={`border ${classes["track-content-table"]}`}>
						<span className={classes["table-row"]}>
							<strong>
								Album Name/ID: {trackInfo.album} (id: {trackInfo.albumId})
							</strong>
						</span>
						<span className={classes["table-row"]}>
							<strong>Song Genre: {trackInfo.genre}</strong>
						</span>
						<span className={classes["table-row"]}>
							<strong>Explicit Words: {trackInfo.explicit}</strong>
						</span>
						<span className={classes["table-row"]}>
							<strong>First Release Date: 01/01/2022</strong>
						</span>
					</div>
				</main>
			)}
		</div>
	);
};

export default Track;
