import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import SignUp from "./signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/products/:keyword" element={<ProductList />} />
          <Route path={"/product/:id"} element={<ProductDetail />} />
          {/* <Route path={`/products/:productId`} element={<ProductDetail />} />
          <Route path={"/products/add"} element={<ProductAdding />} />
          <Route path={`/products/edit/:productId`} element={<ProductEditing />} /> */}
          <Route path={`/login`} element={<Login />} />
          <Route path={`/signup`} element={<SignUp />} />
        </Routes>
        <HomeFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;



