import axios from "axios";
import { useState, useEffect } from "react";

async function fetchCategory(categoryId) {
    try {
        const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/suggesions/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function fetchProducts(productId) {
    try {
        const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getBreadcrumbs = async (productId) => {
    const response = await fetchProducts(productId);

    const categories = [];
    let categoryId = response.id;

    const categoryResponse = await fetchCategory(categoryId);
    const category = categoryResponse;

    categories.unshift(category);

    return categories;
};

const Breadcrumbs = ({ productId }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getBreadcrumbs(productId);
            setCategories(categories);
        };

        fetchData();
    }, [productId]);

    return (
        <ul className="flex gap-2 text-sm items-center">
            {categories.map((category) => (
                <li key={category.id}>
                    <a className="font-medium text-secondary-light" href={`/category/${category.name}`}>{category.name}</a>
                    <span className="text-xs">{'>'}</span>
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs
