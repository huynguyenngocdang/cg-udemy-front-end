import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import _ from 'lodash';
import Cart from "../homeContent/cart";

const DropdownItem = ({ title }) => (
  <a className="item" href="#">{title}</a>
);

const DropdownSubmenu = ({ title }) => {

  return (
    <div className="dropdown-submenu">
      <a href={`/courses/${title}`} className="test" >{title}</a>
    </div>
  );
};

const Dropdown = ({ title }) => {
  const [items, setItems] = useState([]);

  const handleMouseEnter = () => {
    if (items.length == 0) {
      axios.get('http://localhost:8080/api/categories').then(response => {
        console.log(response.data)
        setItems(response.data);
      });
    }
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter}>
      <button className="dropbtn">{title}</button>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <DropdownSubmenu
            key={index}
            title={item}
          />
        ))}
      </div>
    </div>
  );
};

async function getProducts(keyword) {
  try {
    const response = await axios.get(`http://localhost:8080/api/courses/?search=${keyword}`);
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
        const response = await axios.get(`http://localhost:8080/api/courses/query?search=${searchValue}`);
        setSuggestions(response.data);
        setProducts(response.data);
      } else {
        setSuggestions([]);
        setProducts([]);
      }
    };

    const debouncedFn = _.debounce(() => {
      fetchSuggestionsAndProducts();
    }, 500);

    debouncedFn();
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
            <a href={`/courses/${suggestion.name}`} onClick={() => { setSuggestions([]); setProducts([]); }}><SearchOutlinedIcon className="icon" /> {suggestion.name}</a>
          </div>
        ))}
        {products.slice(0, 4).map(product => (
          <div className="groupSearch" key={product.id}>
            <Link to={`/course/${product.id}`} onClick={() => { setSuggestions([]); setProducts([]); }}>(ID: {product.id})  {product.name}</Link>
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
          <Link to={"/"}><img src="..//logo.jpg" className="logo" alt="logo"></img></Link>
        </div>
        <div className="categoriesDiv">
          <span className="categories"><Dropdown title="Categories" /></span>
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
          <span className="teach"><Link to={"/teacher"}>Teach on Udemy</Link></span>
        </div>
        <div className="cartDiv">
          <Link to="/cart"><ShoppingCartOutlinedIcon className="icon" /></Link>
        </div>
        <div className="login button"><Link to={"/login"}>Log In</Link></div>
        <div className="signup button"><Link to={"/signup"}>Sign Up</Link></div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
