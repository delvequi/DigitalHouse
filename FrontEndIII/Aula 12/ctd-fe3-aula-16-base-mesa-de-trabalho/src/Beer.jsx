import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const navigate = useNavigate();

  const getBeer = async () => {
    try {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch beer data: ${res.statusText}`);
      }
      const data = await res.json();
      if (data.length > 0) {
        const beerData = data[0];
        const image_url = `https://images.punkapi.com/v2/${beerData.id}.png`;
        beerData.image_url = image_url; 
        setBeer(beerData);
      } else {
        throw new Error(`Beer not found with ID: ${id}`);
      }
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  const goBack = () => {
    navigate('/home'); 
  };

  return (
    <div>
      {beer && (
        <div>
          <h2>Cerveja número: {id}</h2>
          <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips}</p>
          </div>
          <button onClick={goBack}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default Beer;
