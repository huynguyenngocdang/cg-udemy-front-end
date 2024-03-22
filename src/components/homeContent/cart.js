import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}

      <h1>Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
}
import React, { useState } from 'react';

// Giả sử đây là danh sách sản phẩm
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart({ cart }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <button onClick={toggleCart}>Cart ({cart.length})</button>
      {isCartVisible && <Cart cart={cart} />}
    </div>
  );
}

// export default App;


export default Cart;
