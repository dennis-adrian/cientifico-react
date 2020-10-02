import React from 'react';

export const CharacterInfoCard = ({ episode, status, species, gender, origin, location }) => (
    <article className="Characters-card">
        <h3>Episodes: <span>{episode?.length}</span></h3>
        <h3>Status: <span>{status}</span></h3>
        <h3>Species: <span>{species}</span></h3>
        <h3>Gender: <span>{gender}</span></h3>
        <h3>Origin: <span>{origin?.name}</span></h3>
        <h3>Last Location: <span>{location?.name}</span></h3>
    </article>
);
