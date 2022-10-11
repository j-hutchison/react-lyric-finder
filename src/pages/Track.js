import React from "react";
import LogoBanner from "../components/LogoBanner";
import { useParams } from "react-router-dom";

const Track = () => {
	let params = useParams();
	console.log("TRACK!");
	return (
		<>
			<LogoBanner />
			<div>Track {params && params.trackId}</div>
		</>
	);
};

export default Track;
