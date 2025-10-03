import React,{useContext} from 'react'
import { ResultsContext } from '../contexts/ResultsContextProvider';

const VideoResults = () => {
  const { isLoading, results } = useContext(ResultsContext);

  if (isLoading) return <h2>Loading Videos...</h2>;

  return (
    <div>
      {Array.isArray(results) && results.length > 0 ? (
        results.map((videos, i) => (
          <div key={i}>
            <p>{videos.title}</p>
            <video controls>
              <source src={videos.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{videos.source}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default VideoResults;