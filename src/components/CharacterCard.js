import React from "react";
import './CharacterCard.css';

const CharacterCard = ({character}) => {
    return(
        <div className="character-card">
                <h1>{character.name}</h1>
                Gender: {character.gender}
                <br></br>
                Age: {character.age}
                <br></br>
                Eye Color: {character.eye_color}
                <br></br>
                Hair Color: {character.hair_color}
                <br></br>
                Films: <a href={character.films}>Click this</a>
        </div>
    )
}

export default CharacterCard;