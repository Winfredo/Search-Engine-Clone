import React,{useContext} from 'react'
import { ResultsContext } from '../contexts/ResultsContextProvider';

const NewsResults = () => {
  const { isLoading, results } = useContext(ResultsContext);
  if (isLoading) return <h2>Loading News...</h2>;
  return (
    <div>
      {Array.isArray(results) && results.length > 0 ? (
        results.map((news, i) => (
          <div key={i}>
            <p>{news.title}</p>
            <img src={news.imageUrl} alt={news.title || "image"} />
            <p>{news.source}</p>
            <p>{news.date}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  )
}

export default NewsResults
