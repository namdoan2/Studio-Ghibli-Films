import React, { useEffect, useState } from "react";
import './FilmList.css';
import FilmCard from "./FilmCard";

const FilmList = () => {

    const [films, setFilms] = useState([]);

    const getFilms = async () => {
    const data = await fetch ('https://ghibliapi.herokuapp.com/films/')
    const films = await data.json();
    console.log(films);
        setFilms(films);
    }

    useEffect(() => {
        getFilms();
    }, [])

    return(
        <div className="film-container">
            {films.map((film) => (
                <FilmCard film={film}/>
                ))}
        </div>
    )
}

export default FilmList;

