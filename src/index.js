import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Track from "./pages/Track";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/tracks" element={<Track />}>
				<Route path="/tracks:trackId" element={<Track />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
