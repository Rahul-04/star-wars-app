import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div className="movie-details">No movie selected</div>;
  }

  return (
    <div className="movie-details">
      <h2>
        Episode {movie.episode_id} - {movie.title}
      </h2>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Producer:</strong> {movie.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date.toDateString()}
      </p>
      <p>{movie.opening_crawl}</p>
    </div>
  );
};

export default MovieDetails;
