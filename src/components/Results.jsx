import React from "react";
import "../App.css";
const Results = ({ dark }) => {
  return (
    <div className="results-container">
        <h1>GOOGLE</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Search"
          className={dark ? "input-dark" : "input-light"}
        />
      </form>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Results;
