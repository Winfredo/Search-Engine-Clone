import React,{useEffect,useContext} from 'react'
import { ResultsContext } from '../contexts/ResultsContextProvider';

const VideoResults = () => {
  const { isLoading, results } = useContext(ResultsContext);

  {isLoading && results.length === 0 && <h2>Loading Videos...</h2>}


  return (
  <div className="video-results">
  {results.length > 0 ? (
    results.map((video, i) => (
      <div key={i} className="video-card">
        <video className="video-player" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-info">
          <h4 className="video-title">{video.title}</h4>
          <p className="video-source">{video.source}</p>
        </div>
      </div>
    ))
  ) : (
    !isLoading && <p>No results found</p>
  )}
</div>
  );
};

export default VideoResults;