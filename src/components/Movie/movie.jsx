import React from "react";
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => { return (
    
    <div className="movie">
        <div className="movie__poster">
            <img className="movie__image" src={poster} alt="Poster" />
            <dir className="movie__rating">{rating}</dir>
        </div>
        <div className="movie__text">
            <div className="movie__title">{title}</div>
            <div className="movie__year"><b>Rok vydání:</b> {year}</div>
            <div className="movie__genre"><b>Žánr:</b> {genre}</div>
            <div className="movie__director"><b>Režisér:</b> {director}</div>
        </div>

    </div>
    )
};

export default Movie;