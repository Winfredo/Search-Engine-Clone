import React, { useContext } from "react";
import { ResultsContext } from "../contexts/ResultsContextProvider";
const ImageResults = ({dark}) => {
  const { isLoading, results } = useContext(ResultsContext);

  {
    isLoading && results.length === 0 && <h2>Loading Images...</h2>;
  }
  return (
  <div className="image-results">
  {results.length > 0 ? (
    results.map((img, i) => (
      <div key={i}  className={`image-card ${dark ? "image-card-dark" : "image-card-light"}`}>
        <img src={img.imageUrl} alt={img.title || "image"} className="image-thumb" />
        <div className="image-info">
          <h4 className={`image-title ${dark ? "image-title-dark" : "image-title-light"}`}>{img.title}</h4>
          <p className={dark ? "image-source-dark" : "image-source"}>{img.source}</p>
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
