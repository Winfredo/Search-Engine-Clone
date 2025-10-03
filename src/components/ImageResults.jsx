import React, { useEffect, useContext } from "react";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const ImageResults = () => {
  const { isLoading, results } = useContext(ResultsContext);

  {
    isLoading && results.length === 0 && <h2>Loading Images...</h2>;
  }
  return (
  <div className="image-results">
  {results.length > 0 ? (
    results.map((img, i) => (
      <div key={i} className="image-card">
        <img src={img.imageUrl} alt={img.title || "image"} className="image-thumb" />
        <div className="image-info">
          <h4 className="image-title">{img.title}</h4>
          <p className="image-source">{img.source}</p>
        </div>
      </div>
    ))
  ) : (
    !isLoading && <p>No results found</p>
  )}
</div>
  );
};

export default ImageResults;
