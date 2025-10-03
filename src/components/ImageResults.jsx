import React from "react";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const ImageResults = () => {
  const { isLoading, searchTerm, getImageResults, setSearchTerm, results } =
    useContext(ResultsContext);
  if (isLoading) return <h2>Loading Images...</h2>;
  return (
    <div>
      {Array.isArray(results) && results.length > 0 ? (
        results.map((img, i) => (
          <div key={i}>
            <p>{img.title}</p>
            <img src={img.imageUrl} alt={img.title || "image"} />
            <p>{img.source}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default ImageResults;
