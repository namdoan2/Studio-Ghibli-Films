import React from "react";
import './FilmCard.css';


const FilmCard = ( {film} ) => {
    return(
        <div className="filmcard">
            <img src={film.image} alt={film.title} />
            <h2>{film.title} ({film.release_date})</h2>
            <div className="filmmakers">
            <h4>
            Director: {film.director}
            </h4>
            <h4>
            Producer: {film.producer}
            </h4>
            </div>
            <p>{film.description}</p>
        </div>
    )
}

export default FilmCard;

    