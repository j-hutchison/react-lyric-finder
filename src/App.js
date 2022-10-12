import React, { useState } from "react";
import LogoBanner from "./components/LogoBanner";
import Search from "./layout/Search";
import MainContent from "./layout/MainContent";
import { ContextProvider } from "./context/ContextProvider";
import "./App.css";

function App() {
	const [mainTitle, setMainTitle] = useState("Top 10 Tracks");

	return (
		<div className="App">
			<ContextProvider>
				<LogoBanner />
				<Search />
				<MainContent title={mainTitle} />
			</ContextProvider>
		</div>
	);
}

export default App;
