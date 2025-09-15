import React, { useContext } from "react";
import "../App.css";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const Results = ({ dark }) => {
  const { isLoading, getResults, searchTerm, setSearchTerm, results } =
    useContext(ResultsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      getResults(searchTerm);
    }
  };
  return (
    <div className="results-container">
      {isLoading && <h2>Loading Items...</h2>}
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

 <div className="results-list">
  {Array.isArray(results) && results.length > 0 ? (
    results.map((item, index) => (
      <div key={index} className="result-item">
        <h3>{item.title}</h3>
        <p>{item.snippet}</p>
      </div>
    ))
  ) : (
    !isLoading && <p>No results found</p>
  )}
</div>
    </div>
  );
};

export default Results;
