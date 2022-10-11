const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": process.env.REACT_APP_SPOTIFY_API_HOST,
	},
};

const getTop10 = async () => {
	const response = await fetch(
		"https://spotify23.p.rapidapi.com/playlist_tracks/?id=6UeSakyzhiEt4NB3UAd6NQ&offset=0&limit=10",
		options
	);
	console.log(response);

	if (!response.ok) {
		console.log(`An error occurred processing the request!`);
		return "ERROR";
	}
	const data = await response.json();
	console.log(data);

	const { items: spotifyResults } = data;

	let tracks = [];
	spotifyResults.forEach((spotifyResult) => {
		const { track } = spotifyResult;
		const trackObj = {
			id: track.id,
			track: track.name,
			artist: track.artists[0].name,
			album: track.album.name,
		};
		console.log(trackObj);
		tracks.push(trackObj);
	});

	console.log(tracks);
	return tracks;
};

const getTrackById = (id) => {
	return {};
};

const searchForTrack = (lyrics) => {
	return [];
};

export { getTop10, getTrackById, searchForTrack };
