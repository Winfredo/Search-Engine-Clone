import React,{useContext} from 'react'
import { ResultsContext } from '../contexts/ResultsContextProvider';

const SearchResults = () => {
  const { isLoading, results } = useContext(ResultsContext);

  if (isLoading) return <h2>Loading Search Results...</h2>;

  return (
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
  )
}

export default SearchResults
