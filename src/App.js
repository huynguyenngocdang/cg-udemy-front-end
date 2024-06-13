import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./components/CourseDetail";
import CourseList from "./components/CourseList";
import SignUp from "./signup";
import Cart from "./components/homeContent/cart";
import ThankYouComponent from "./components/homeContent/thanks";
import TeacherDashboard from "./components/TeacherDashboard";
import Confirmation from "./components/homeContent/Confirmation";
import CourseAdding from "./components/product/CourseAdding";
import CourseEditing from "./components/product/CourseEditing";
import CourseList from "./components/product/CourseList";
import CourseDetail from "./components/product/CourseDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/courses/:keyword" element={<CourseList />} />
          <Route path={"/course/:id"} element={<CourseDetail />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/confirmation"} element={<Confirmation />} />
          <Route path={"/thanks"} element={<ThankYouComponent />} />
          <Route path={"/teacher"} element={<CourseList />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/signup`} element={<SignUp />} />
          <Route path={`/products/:productId`} element={<CourseDetail />} />
          <Route path={"/products/add"} element={<CourseAdding />} />
          <Route path={`/products/edit/:productId`} element={<CourseEditing />} />
        </Routes>
        <HomeFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;



