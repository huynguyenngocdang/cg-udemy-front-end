import axios from 'axios';
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/products/${id}`);
        setProduct(response.data);
      }
    };

    fetchProduct();
  }, [id]);

  return product ? (
    <div>
      <h2>{product.name}</h2>
      {/* Display other product details here */}
    </div>
  ) : null;
};

export default ProductDetail