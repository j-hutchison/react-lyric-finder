import React, { useState, createContext } from "react";

const SearchContext = createContext({
	results: [],
	title: "",
	setTitle: (title) => {},
	setResults: (results) => {},
});

const ContextProvider = (props) => {
	const [title, setTitle] = useState("Top 10 Tracks");
	const [results, setResults] = useState([]);

	const searchCtx = {
		results: results,
		setResults: setResults,
		title: title,
		setTitle: setTitle,
	};

	return (
		<SearchContext.Provider value={searchCtx}>
			{props.children}
		</SearchContext.Provider>
	);
};

export { ContextProvider };
export { SearchContext };
