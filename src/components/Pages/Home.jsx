import React, { useState, useEffect } from 'react';
import CharactersGrid from '../CharactersGrid';


const Home = () => {
    const [characters, setCharacters] = useState([])

    const API = 'https://rickandmortyapi.com/api/character/';

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, [])
    return (
        <CharactersGrid characters={characters} />
    )
}

export default Home;
