import React from "react";

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.episode_id} className="movie-item">
          <div className="movie-name" onClick={() => onMovieSelect(movie)}>
            <p>
              <strong>Episode {movie.episode_id}</strong>: {movie.title}
            </p>
          </div>
          <div className="movie-year" onClick={() => onMovieSelect(movie)}>
            <p>{movie.release_date.toDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
