import React from "react";
import { useState, useEffect } from "react";
import "./headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import axios from 'axios';
import { Link } from "react-router-dom";
import _ from 'lodash';

const DropdownItem = ({ title }) => (
  <a className="item" href="#">{title}</a>
);

const DropdownSubmenu = ({ title, items, isOpen, handleToggle }) => {
  return (
    <div className="dropdown-submenu">
      <a href="#" className="test" onClick={handleToggle}>{title}</a>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <DropdownItem key={index} title={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Dropdown = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => (e) => {
    e.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">{title}</button>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <DropdownSubmenu
            key={index}
            title={item.title}
            items={item.items}
            isOpen={openIndex === index}
            handleToggle={handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const productsData = [
  { id: 1, name: 'web development bootcamp', description: 'Mô tả sản phẩm 1' },
  { id: 2, name: 'web developer bootcamp', description: 'Mô tả sản phẩm 2' },
];

const keywordsData = ['web development', 'web design', 'webdriver', 'Sản phẩm 4'];
const dropdownItems = [
  {
    title: 'Web development',
    items: ['HTML', 'CSS']
  },
  {
    title: 'Data science',
    items: ['Machine learning', 'Deep learning']
  }
];

function Search() {
  const [input, setInput] = useState('');
  const [products, setProducts] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    const filteredProducts = productsData.filter(product => product.name.includes(event.target.value));
    setProducts(filteredProducts);
    const filteredKeywords = keywordsData.filter(keyword => keyword.includes(event.target.value));
    setKeywords(filteredKeywords);
  };

  const handleProductClick = (productId) => {
    const productDetails = productsData.find(product => product.id === productId);
    console.log(productDetails);
  };

  const handleKeywordClick = (keyword) => {
    const filteredProducts = productsData.filter(product => product.name.includes(keyword));
    setProducts(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        className="searchBar"
        placeholder="Tìm kiếm..."
        onChange={handleInputChange}
      />
      {input && (
        <ul className="itemMatch">
          {keywords.map((keyword, index) => (
            <li className="groupSearch" key={`keyword-${index}`} onClick={() => handleKeywordClick(keyword)}>
              <SearchOutlinedIcon className="icon" /> {keyword}
            </li>
          ))}
          {products.map((product, index) => (
            <li className="groupSearch" key={`product-${index}`} onClick={() => handleProductClick(product.id)}>
              (ID: {product.id})  {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

async function fetchProducts(keyword) {
  try {
    const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/products?search=${keyword}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSuggestionsAndProducts = async () => {
      if (searchValue) {
        const response = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/suggesions?search=${searchValue}`);
        setSuggestions(response.data);
        const response1 = await axios.get(`http://65faa0933909a9a65b1af31d.mockapi.io/api/products?search=${searchValue}`);
        setProducts(response1.data);
      } else {
        setSuggestions([]);
        setProducts([]);
      }
    };

    const debouncedFn = _.debounce(() => {
      fetchSuggestionsAndProducts();
    }, 500); // delay in ms

    debouncedFn();

    // Cleanup function
    return () => {
      debouncedFn.cancel();
    };
  }, [searchValue]);


  return (
    <div>
      <input
        type="text"
        className="searchBar"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <ul className="itemMatch">
        {suggestions.map(suggestion => (
          <div className="groupSearch" key={suggestion.id}>
            <Link to={`/products/${suggestion.name}`} onClick={() => { setSuggestions([]); setProducts([]); }}><SearchOutlinedIcon className="icon" /> {suggestion.name}</Link>
          </div>
        ))}
        {products.map(product => (
          <div className="groupSearch" key={product.id}>
            <Link to={`/product/${product.id}`} onClick={() => { setSuggestions([]); setProducts([]); }}>(ID: {product.id})  {product.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

function HeaderPrimary() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.jpg" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories"><Dropdown title="Categories" items={dropdownItems} /></span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <SearchComponent />
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Udemy for Business</span>
        </div>
        <div className="teachDiv">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        <div className="login button"><a href="/login">Log In</a></div>
        <div className="signup button"><a href="/signup">Sign Up</a></div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
