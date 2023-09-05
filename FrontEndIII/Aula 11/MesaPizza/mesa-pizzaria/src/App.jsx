
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Child from './Child';


function Container() {
  const [imHungryFor, setImHungryFor] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImHungryFor('Pizzas');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('O componente foi atualizado!');
  });

  const cancelOrder = () => {
    setShow(false);
  };

  useEffect(() => {
    if (!show) {
      alert('Seu pedido foi cancelado.');
    }
  }, [show]);

  return (
    <div>
      {show && <Child food={imHungryFor} />}
      <button type="button" onClick={cancelOrder}>
        Cancelar pedido.
      </button>
    </div>
  );
}
export default Container;

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<Container />, document.getElementById('root'));
