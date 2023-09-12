import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BeerDetail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBeer = async () => {
      try {
        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        if (!res.ok) {
          if (res.status === 404) {
            setError('Beer not found');
          } else {
            throw new Error(`Failed to fetch beer data: ${res.statusText}`);
          }
        } else {
          const data = await res.json();
          if (data) {
            const beerData = data[0];
           
            const image_url = `https://images.punkapi.com/v2/${beerData.id}.png`;
            beerData.image_url = image_url;
            setBeer(beerData);
          } else {
            setError('Beer not found');
          }
        }
      } catch (error) {
        setError(`Error fetching beer: ${error.message}`);
      }
    };

    getBeer();
  }, [id]);

  const goBack = () => {
    navigate('/home');
  };

  return (
    <div className='beer-detail'>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Cerveja número: {id}</h2>
          <div className='card'>
          
            <img src={beer.image_url} alt={`Beer ${beer.id} Image`} />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips}</p>
          </div>
          <button onClick={goBack}>Voltar</button>
        </>
      )}
    </div>
  );
};

export default BeerDetail;
