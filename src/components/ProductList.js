import axios from 'axios';
import { useParams } from 'react-router-dom';
import ComplexGrid from "./homeContent/ComplexGrid";
import Pagination from './homeContent/Pagination';
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const { keyword } = useParams();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      if (keyword) {
        const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/products?search=${keyword}`);
        setProducts(response.data);
      }
    };

    fetchProducts();
  }, [keyword]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {currentProducts.map((product, index) => {

        const productInCart = cart.find((item) => item.id === product.id);
        return (
          <ComplexGrid key={index} name={product.name} productInCart={productInCart} id={product.id} description={product.description} price={product.price} />
        );
      })}
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />

    </div>
  );
};

export default ProductList;