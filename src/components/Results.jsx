import React from "react";
import "../App.css";
import useLocation from 'react-router-dom'
// import ReactPlayer from 'react-player'
import {useResults} from '../contexts/ResultsContextProvider'

const Results = ({ dark }) => {
    const {results, isLoading, getResults,searchTerm} = useResults()
    const location = useLocation()

    if(isLoading) return <h1>Loading Items...</h1>
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
