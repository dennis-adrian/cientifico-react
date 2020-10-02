import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, page = 'grid' }) => (
    (page === 'grid')
        ?
        <article className="Characters-item">
            <Link to={`/character/${id}`}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
            </Link>
        </article>
        :
        <article className="Characters-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </article>
);
export default Card;