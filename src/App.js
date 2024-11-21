import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("episode");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/?format=json")
      .then((response) => {
        const movies = response.data.results.map((movie) => ({
          ...movie,
          release_date: new Date(movie.release_date),
        }));
        setMovies(movies);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSort = (option) => {
    setSortBy(option);
  };

  const handleFilter = (value) => {
    setFilter(value.toLowerCase());
  };

  const filteredMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(filter))
    .sort((a, b) => {
      if (sortBy === "episode") return a.episode_id - b.episode_id;
      return a.release_date - b.release_date;
    });

  return (
    <div className="app-container">
      <header>
        <h1>Star Wars Movies</h1>
        <div className="controls">
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="">Sort by ...</option>
            <option value="episode">Episode</option>
            <option value="year">Year</option>
          </select>
          <input
            type="text"
            placeholder="Search by title..."
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </header>
      <div className="content">
        <MovieList movies={filteredMovies} onMovieSelect={setSelectedMovie} />
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
};

export default App;
