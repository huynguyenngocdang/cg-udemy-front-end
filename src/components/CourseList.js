import axios from 'axios';
import { useParams } from 'react-router-dom';
import courseCardModule from "./homeContent/courseCardModule";
import Pagination from './homeContent/Pagination';
import React, { useState, useEffect } from 'react';

const CourseList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const { keyword } = useParams();

  const fetchCourses = async (keyword) => {
    const categoryExistsResponse = await axios.get(`http://localhost:8080/api/courses/courses-by-category?category=${keyword}`);
    let response;
    console.log(categoryExistsResponse.data);
    if (categoryExistsResponse.data && categoryExistsResponse.data.length > 0) {
      response = await axios.get(`http://localhost:8080/api/courses/courses-by-category?category=${keyword}`);
    } else {
      response = await axios.get(`http://localhost:8080/api/courses/search?query=${keyword}`);
    }
    setProducts(response.data);
  };

  useEffect(() => {
    if (products.length == 0) {
      fetchCourses(keyword);
    }
  }, [keyword]);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {currentProducts.map((product, index) => {
        return (
          <courseCardModule key={index} name={product.name} image={product.video} product={product} id={product.id} description={product.description} price={product.price} />
        );
      })}
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />

    </div>
  );
};

export default CourseList;