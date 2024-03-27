import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};
