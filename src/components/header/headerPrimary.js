import React from "react";
import { useState } from "react";
import "./headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

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


// function SearchBox() {
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [products, setProducts] = useState([]);

//   const onSuggestionsFetchRequested = async ({ value }) => {
//     if (value.length < 2) return;
//     const products = await fetchProducts(value);
//     setSuggestions(products);
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onChange = (event, { newValue }) => {
//     setValue(newValue);
//   };

//   const onSuggestionSelected = async (event, { suggestion }) => {
//     const products = await fetchProducts(suggestion.name);
//     setProducts(products);
//   };

//   const inputProps = {
//     placeholder: 'Tìm kiếm sản phẩm...',
//     value,
//     onChange
//   };

//   return (
//     <div>
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={onSuggestionsClearRequested}
//         getSuggestionValue={(suggestion) => suggestion.name}
//         renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
//         inputProps={inputProps}
//         onSuggestionSelected={onSuggestionSelected}
//       />
//       <div>
//         {products.map((product) => (
//           <div key={product.id}>{product.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

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
        <Search />
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
        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
