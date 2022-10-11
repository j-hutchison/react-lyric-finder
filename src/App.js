import React, { useState } from "react";
import LogoBanner from "./components/LogoBanner";
import Search from "./layout/Search";
import MainContent from "./layout/MainContent";
import "./App.css";

function App() {
	const [mainTitle, setMainTitle] = useState("Top 10 Tracks");

	return (
		<div className="App">
			<LogoBanner />
			<Search />
			<MainContent title={mainTitle} />
		</div>
	);
}

export default App;
