import React, {useEffect, useState} from "react";
import CharacterCard from './CharacterCard';
import './Characters.css';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/people/');
        const characters = await data.json();
        setCharacters(characters);
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return(
        <div className="character-container">
            {characters.map((character) => (
                <CharacterCard character={character}/>
                ))}
        </div>
    )
}

export default Characters;