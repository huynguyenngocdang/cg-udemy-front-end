import React from "react";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/authentication/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/authentication/signup";
import Cart from "./pages/cart/cart";
import Thanks from "./pages/thanks/thanks";
import Order from "./pages/order/order";
import CourseList from "./pages/course/courseList";
import CourseDetail from "./pages/course/courseDetail";
import CourseAdding from "./pages/course/courseAdding";
import CourseEditing from "./pages/course/courseEditing";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/courses/:keyword"} element={<CourseList/>}/>
                    <Route path={"/courses/:id"} element={<CourseDetail/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/order"} element={<Order/>}/>
                    <Route path={"/thanks"} element={<Thanks/>}/>
                    <Route path={"/teacher"} element={<CourseList/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/course/add"} element={<CourseAdding/>}/>
                    <Route path={"/course/edit/:courseId"} element={<CourseEditing/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;