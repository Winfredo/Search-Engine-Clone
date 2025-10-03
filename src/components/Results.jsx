import React, { useContext } from "react";
import "../App.css";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const Results = ({ dark }) => {
  const { isLoading, searchTerm, getSearchResults, setSearchTerm, results } =
    useContext(ResultsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      getSearchResults(searchTerm);
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
      <div className="results-list">
        {isLoading && <h2>Loading Items...</h2>}
        {Array.isArray(results) && results.length > 0
          ? results.map((item, index) => (
              <div key={index} className="result-item">
                
                <h3>{item.title}</h3> <p>{item.snippet}</p>
                <h3>{item.description}</h3> <p>{item.snippet}</p>
              </div>
            ))
          : !isLoading && <p>No results found</p>}
      </div>
    </div>
  );
};

export default Results;
