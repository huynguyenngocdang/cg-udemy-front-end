import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";
import {useState, useEffect} from "react";
import axios from 'axios';

function RecommendedVideos() {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const fetchBestSellingProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/courses/best-selling');
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products: ', error);
            }
        };

        await fetchBestSellingProducts();
    }, []);
    return (
        <div className="recommendedVideos">
            {products.map((product) => (
                <div key={product.id}>
                    <VideoCard
                        courseTitle={product.name}
                        imgSrc={product.video}
                        instructor={"Kyle Pew, Office New LLC"}
                        rating={4.6}
                        noOfStudents={"(166,042)"}
                        price={product.price}
                    />
                </div>
            ))}
        </div>
    );
}

export default RecommendedVideos;
