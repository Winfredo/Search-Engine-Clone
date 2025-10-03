import React, { createContext, useState } from "react";

const ResultsContext = createContext();
const baseUrl = "https://google.serper.dev/";

const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = import.meta.env.VITE_SERPER_API_KEY;

  // 🔹 Universal fetch function
  const fetchResults = async (endpoint, query, parser) => {
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

      // Use parser function to extract correct results
      setResults(parser(data));
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 Specialized fetchers (using parser functions)
  const getSearchResults = (query) =>
    fetchResults("search", query, (data) => [
      ...(data.knowledgeGraph ? [data.knowledgeGraph] : []),
      ...(data.organic || []),
    ]);

  const getImageResults = (query) =>
    fetchResults("images", query, (data) => data.images || []);

  const getVideoResults = (query) =>
    fetchResults("videos", query, (data) => data.videos || []);

  const getNewsResults = (query) =>
    fetchResults("news", query, (data) => data.news || []);

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
