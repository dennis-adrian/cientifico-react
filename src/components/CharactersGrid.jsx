import React from 'react';
import CharacterCard from './Molecules/CharacterCard';

const CharactersGrid = ({ characters }) => (
    <div className="Characters" >
        {characters.map((character) => (
            <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                page='grid'
            />
        ))}
    </div>
);

export default CharactersGrid;