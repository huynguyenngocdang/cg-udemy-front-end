import React from "react";
import { useState } from "react";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

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

const Search = ({ items }) => {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        className="searchBar"
        onChange={e => setSearch(e.target.value)}
        placeholder="Tìm kiếm..."
      />
      {search && (
        <ul className="itemMatch">
          {filteredItems.map((item, index) => (
          <div className="groupSearch">
            <SearchOutlinedIcon className="icon" />
            <a key={index} href="#"><b>{item}</b></a>
          </div>
          ))}
        </ul>
      )}
    </div>
  );
};

function HeaderPrimary() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
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
        <Search items={items} />
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
        <div className="login button">Log In</div>
        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
