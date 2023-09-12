import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h3>{data.name}</h3>
      <p>{data.tagline}</p>
      <img src={data.image_url} alt={`${data.name} Image`} />
      <Link to={`/beer/${data.id}`} target="_blank" rel="noopener noreferrer">
        Detalhes
      </Link>
    </div>
  );
};

export default Card;
