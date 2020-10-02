import React, { useState, useEffect } from 'react';
import CharacterCard from '../Molecules/CharacterCard';
import { CharacterInfoCard } from '../Molecules/CharacterInfoCard';

const Character = ({ match }) => {
    const [character, setCharacter] = useState({})

    const API = `https://rickandmortyapi.com/api/character/${match.params.id}`;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }, [])

    return (
        <div className="Characters-inner">
            <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                page='character'
            />
            <CharacterInfoCard
                episode={character.episode}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                location={character.location}
            />
        </div>
    )
};

export default Character;