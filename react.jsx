import React, { useState } from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'Product 1', description: 'This is the first product description.', price: 10.0 },
    { id: 2, name: 'Product 2', description: 'This is the second product description.', price: 15.0 },
    { id: 3, name: 'Product 3', description: 'This is the third product description.', price: 20.0 },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ordering System</h1>
      </header>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
