import React,{useContext} from 'react'
import { ResultsContext } from '../contexts/ResultsContextProvider';
import {useOutletContext} from 'react-router-dom';

const SearchResults = ({ dark }) => {
  const { isLoading ,results } = useContext(ResultsContext);
  const { hasSearched } = useOutletContext();

  {
    isLoading && results.length === 0 && <h2>Loading Images...</h2>;
  }

  return (
   <div className="results-list">
  {results.length > 0 ? (
    results.map((item, index) => (
      <div key={index} className={`result-item ${dark ? "result-item-dark" : "result-item-light"}`}>
        <h3 className="result-title">{item.title}</h3>
        {item.snippet && <p className="result-snippet">{item.snippet}</p>}
        {item.description && (
          <p className="result-description">{item.description}</p>
        )}
      </div>
    ))
  ) : (
    hasSearched && !isLoading && <p>No results found</p>
  )}
</div>
  )
}

export default SearchResults
