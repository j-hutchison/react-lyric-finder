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

const getTrackById = async (id) => {
	const response = await fetch(
		`https://spotify23.p.rapidapi.com/tracks/?ids=${id}`,
		options
	);

	if (!response.ok) {
		return "An error occurred when attempting to return a track by id";
	}

	const data = await response.json();
	console.log(data);

	const responseLyrics = await fetch(
		`https://spotify23.p.rapidapi.com/track_lyrics/?id=${data.tracks[0].id}`,
		options
	);

	if (!responseLyrics.ok) {
		return "An error occurred when attempting to return track lyrics by id";
	}

	const dataLyrics = await responseLyrics.json();
	console.log(dataLyrics);

	const { tracks } = data;

	return { track: tracks[0], lyrics: dataLyrics.lyrics.lines };
};

const searchForTrack = async (searchTerm) => {
	const response = await fetch(
		`https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
			searchTerm
		)}&type=tracks&offset=0&limit=1&numberOfTopResults=1`,
		options
	);

	if (!response.ok) {
		return `An error occurred when searching for a track using the search term: ${searchTerm}`;
	}

	const data = await response.json();
	console.log(data);

	return data;
};

export { getTop10, getTrackById, searchForTrack };
