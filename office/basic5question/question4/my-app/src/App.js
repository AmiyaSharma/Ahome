import React from 'react';
// import Product from './Product';

const App = () => {
  const productName = 'Laptop';
  const productPrice = 999.99;
  const productQuantity = 5;

  const Product = ({ name, price, quantity }) => {
    return (
      <div>
        <p>
          Product: {name}, Price: ${price}, Quantity: {quantity}
        </p>
      </div>
    );
  };

  return (
    <div>
      <h2>Product Information</h2>
      <Product name={productName} price={productPrice} quantity={productQuantity} />
    </div>
  );
};

export default App;
