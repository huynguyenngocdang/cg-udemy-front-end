import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          {/* <Route path={`/products/:productId`} element={<ProductDetail />} />
        <Route path={"/products/add"} element={<ProductAdding />} />
        <Route path={`/products/edit/:productId`} element={<ProductEditing />} /> */}
          <Route path={`/login`} element={<Login />} />
        </Routes>
        <HomeFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const SearchComponent = () => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={handleSearchChange}
//       />
//       {/* Display suggestions here */}
//       {/* When a suggestion is clicked, navigate to the ProductList page with the product name as a URL parameter */}
//       <Link to={`/products/${searchValue}`}>Go to products</Link>
//     </div>
//   );
// };

// const ProductList = ({ match }) => {
//   const [products, setProducts] = useState([]);

//   // Fetch the products when the component is mounted
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get(`https://your-api-url.com/search?query=${match.params.productName}`);
//       setProducts(response.data);
//     };

//     fetchProducts();
//   }, [match.params.productName]);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <div>
//       <Route path="/" exact component={SearchComponent} />
//       <Route path="/products/:productName" component={ProductList} />
//     </div>
//   </Router>
// );

// export default App;



