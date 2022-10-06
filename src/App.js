import React, { useState } from "react";
import LogoBanner from "./components/LogoBanner";
import Searchbar from "./layout/Searchbar";
import MainContent from "./layout/MainContent";
import "./App.css";

function App() {
	const [mainTitle, setMainTitle] = useState("Top 10 Tracks");

	return (
		<div className="App">
			<LogoBanner />
			<Searchbar />
			<MainContent title={mainTitle} />
		</div>
	);
}

export default App;
