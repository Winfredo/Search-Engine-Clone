import React, { useContext } from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const Results = ({ dark }) => {
  const { searchTerm,getVideoResults, getNewsResults,getSearchResults,getImageResults, setSearchTerm, results } =
    useContext(ResultsContext);

    const [hasSearched, setHasSearched] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setHasSearched(true);

    if (location.pathname === "/") {
    getSearchResults(searchTerm);
  } else if (location.pathname === "/images") {
    getImageResults(searchTerm);
  } else if (location.pathname === "/videos") {
    getVideoResults(searchTerm);
  } else if (location.pathname === "/news") {
    getNewsResults(searchTerm);
  }
  };

  return (
    <div className="results-container">
      
      <h1>GOOGLE</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={dark ? "input-dark" : "input-light"}
        />
        <button className="search-btn">Search</button>
      </form>
      <Outlet context={{ hasSearched }} />
    </div>
  );
};

export default Results;
