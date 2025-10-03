import React, { createContext, useState, useCallback } from "react";

const ResultsContext = createContext();
const baseUrl = "https://google.serper.dev/";

const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = import.meta.env.VITE_SERPER_API_KEY;

const fetchResults = useCallback(async (endpoint, query, parser) => {
  setIsLoading(true);
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
      body: JSON.stringify({ q: query }),
    });

    const data = await res.json();
    console.log(`${endpoint} API Response:`, data);

    setResults(parser(data));
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    setIsLoading(false);
  }
}, [API_KEY]);

const getSearchResults = useCallback(
  (query) =>
    fetchResults("search", query, (data) => [
      ...(data.knowledgeGraph ? [data.knowledgeGraph] : []),
      ...(data.organic || []),
    ]),
  [fetchResults]
);

const getImageResults = useCallback(
  (query) => fetchResults("images", query, (data) => data.images || []),
  [fetchResults]
);

const getVideoResults = useCallback(
  (query) => fetchResults("videos", query, (data) => data.videos || []),
  [fetchResults]
);

const getNewsResults = useCallback(
  (query) => fetchResults("news", query, (data) => data.news || []),
  [fetchResults]
);

  return (
    <ResultsContext.Provider
      value={{
        results,
        isLoading,
        searchTerm,
        setSearchTerm,
        getSearchResults,
        getImageResults,
        getVideoResults,
        getNewsResults,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export { ResultsContext };
export default ResultsContextProvider;
