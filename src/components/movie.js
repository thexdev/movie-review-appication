import React, { memo } from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/150";

function Movie({ movie }) {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie col-md-3" key={movie.imdbID}>
      <div className="card bg-light">
        <div className="card-header">
          <h5 className="text-truncate">{movie.Title}</h5>
        </div>
        <img
          width="200"
          src={poster}
          alt={`Movie title: ${movie.title}`}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-title">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Movie);
