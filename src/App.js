import React, { memo, useState, useEffect, Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("components/header"));
const Movie = lazy(() => import("components/movie"));
const Search = lazy(() => import("components/search"));
const LoadIndicator = lazy(() => import("components/load-indicator"));
const Error = lazy(() => import("components/error"));

const OMDB_API_URL = "https://www.omdbapi.com/?apikey=476c7a19&s=";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(OMDB_API_URL + searchValue)
      .then(response => response.json())
      .then(omdb => {
        if (omdb.Response === "True") {
          setMovies(omdb.Search);
          setLoading(false);
        } else {
          setErrorMessage(omdb.Error);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    fetch(OMDB_API_URL + "man")
      .then(response => response.json())
      .then(omdb => {
        setMovies(omdb.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Suspense fallback="loading...">
        <Header text="Movie Review" />
        <Search search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="container-fluid">
          <div className="movies row justify-content-center">
            {loading && !errorMessage ? (
              <LoadIndicator />
            ) : errorMessage ? (
              <Error message={errorMessage} />
            ) : (
              movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)
            )}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default memo(App);
