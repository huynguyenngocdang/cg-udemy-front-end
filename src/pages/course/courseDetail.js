import axios from 'axios';
import React from "react";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Breadcrumbs} from "@mui/material";
import {addToCart} from "../../features/cartSlice";

const CourseDetail = () => {
    const [course, setCourse] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(async () => {
        const fetchCourse = async () => {
            if (id) {
                const response = await axios.get(`http://localhost:8080/api/courses/${id}`);
                setCourse(response.data);
            }
        };

        await fetchCourse();
    }, [id]);

    const handleOnclick = (course) => {
        dispatch(addToCart(course));
        alert("add " + name + " to cart success");
    };

    return course ? (
        <div>
            <div className="w-full">
                <div className="w-full text-white bg-primary pt-8 pb-12">
                    <div className="relative w-custom mx-auto">
                        <div className="p-rightBox flex flex-col gap-5">
                            <Breadcrumbs CourseId={id}/>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-medium tracking-wide">{course.name}</h1>
                                <p className="text-xl">Become a Full-Stack Web Developer with just ONE course. HTML,
                                    CSS, Javascript, Node,
                                    React, PostgreSQL, Web3 and DApps</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-3 items-center">
                                        <span className="py-1 px-2 bg-bestseller text-black text-sm">Bestseller</span>
                                        <div className="flex gap-2">
                                            <span className="text-star font-medium">4.7</span>
                                            <div>
                                                <i className="fa-solid fa-star text-star"></i>
                                                <i className="fa-solid fa-star text-star"></i>
                                                <i className="fa-solid fa-star text-star"></i>
                                                <i className="fa-solid fa-star text-star"></i>
                                                <i className="fa-solid fa-star text-star"></i>
                                            </div>
                                        </div>
                                        <span className="=text-secondary-light underline">(365,557 ratings)</span>
                                        <span>1,218,019 students</span>
                                    </div>

                                    <p>Created by
                                        <span className="text-secondary-light underline">Dr.Angela Yu</span>
                                    </p>

                                    <div className="flex gap-4 items-center">
                                        <div className="flex gap-2 items-center">
                                            <i className="fa-solid fa-exclamation text-white"></i>
                                            <span>Last updated 7/2023</span>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <i className="fa-solid fa-globe text-white"></i>
                                            <span>English</span>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <i className="fa-solid fa-keyboard text-white"></i>
                                            <span>English [Auto], Arabic [Auto],</span>
                                            <span className="text-secondary-light underline">14 more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-box shadow-lg border-white border-custom right-0 top-0">
                            <div className="w-full">
                                <div className="relative w-full h-auto overflow-hidden">
                                    <img className="w-full h-auto"
                                         src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
                                         alt="course video"></img>
                                    <div className="absolute bottom-0 right-0 w-full video-gradient h-48"></div>
                                    <div
                                        className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1 aspect-square w-14 flex items-center justify-between">
                                        <img className="w-10 ml-1.5"
                                             src="https://i.pinimg.com/originals/96/28/28/9628288cf4023b3b5dc553421f8507cf.jpg"
                                             alt="play-button"></img>
                                    </div>
                                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-medium">Preview this course</span>
                                </div>
                            </div>

                            <div className="w-full bg-white text-primary">
                                <div className="flex">
                                    <p className="border-b-black border-b-2 border-r-0 py-3 w-1/2 text-center font-medium">Personal</p>
                                    <p className="border-b-gray-300 border border-l-0 py-3 w-1/2 text-center font-medium">Teams</p>
                                </div>

                                <div className="p-5 mt-1">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-life-bold text-2xl leading-7">Subscribe to Udemy’s top
                                            courses</p>
                                        <p className="text-sm">Get this course, plus 11,000+ of our top-rated courses,
                                            with Personal Plan.
                                            <a href=""
                                               className="text-sm font-medium text-secondary-bold underline underline-offset-4">Learn
                                                more</a>
                                        </p>
                                        <button
                                            className="w-full text-center bg-secondary-screen text-white font-medium py-3 mt-2">Try
                                            Personal
                                            Plan for free
                                        </button>
                                        <p className="text-sm text-gray-500 text-center">Starting at $19.00 per month
                                            after trial</p>
                                        <p className="text-sm text-gray-500 text-center">Cancel anytime</p>
                                    </div>

                                    <div className="relative my-6">
                                        <div className="h-0.5 w-full bg-gray-200"></div>
                                        <span
                                            className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-sm text-gray-500 text-center bg-white p-4">or</span>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="font-medium  text-2xl">{course.price}</p>
                                        <button onClick={() => handleOnclick(course)}
                                                className="text-center py-3 bg-white border border-primary font-medium text-lg hover:bg-gray-100">
                                            Add to cart
                                        </button>
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-sm text-gray-500 text-center">30-Day Money-Back
                                                Guarantee</p>
                                            <p className="text-sm text-gray-500 text-center">Full Lifetime Access</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium underline underline-offset-4">Share</span>
                                            <span
                                                className="font-medium underline underline-offset-4">Gift this course</span>
                                            <span
                                                className="font-medium underline underline-offset-4">Apply coupon</span>
                                        </div>
                                        <form className="relative w-full">
                                            <input
                                                className="w-full px-3.5 py-2.5 border border-primary focus:outline-0"
                                                type="text" placeholder="Enter coupon"></input>
                                            <button
                                                className="absolute right-0 font-medium text-white bg-primary border border-primary py-2.5 px-4">
                                                Apply
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-custom p-rightBox my-10 mx-auto">
                    <div className="border border-gray-300 py-6 px-8 flex flex-col gap-4">
                        <h2 className="font-medium text-3xl">What you'll learn</h2>
                        <div className="grid grid-cols-2 gap-5 text-gray-600">
                            <div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>You will learn how to leverage the power of Python to solve tasks.</p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>You will be able to use Python for your own work problems or personal projects.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>Learn advanced Python features, like the collections module and how to work with
                                        timestamps!</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>You will learn how to leverage the power of Python to solve tasks.</p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>You will be able to use Python for your own work problems or personal projects.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                                </div>
                                <div className="flex gap-3">
                                    <i className="fa-solid fa-check mt-1"></i>
                                    <p>Learn advanced Python features, like the collections module and how to work with
                                        timestamps!</p>
                                </div>
                            </div>
                        </div>
                        <span className="font-medium text-secondary-bold">Show more <i
                            className="fa-solid fa-chevron-down text-xs ml-1"></i></span>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-medium text-3xl">This course includes:</h2>
                        <div className="grid grid-cols-2 mt-2">
                            <div className="flex flex-col gap-2">
                                <div className="relative">
                                    <i className="absolute left-0 text-lg fa-regular fa-circle-play"></i>
                                    <p className="text-lg font-bold ml-10">
                                        22 hours on-demand video
                                    </p>
                                </div>

                                <div className="relative">
                                    <i className="absolute left-0 text-lg fa-solid fa-code"></i>
                                    <p className="ml-10 text-lg font-bold">
                                        19 coding exercises
                                    </p>
                                </div>

                                <div className="relative">
                                    <i className="absolute left-0 text-lg fa-regular fa-file"></i>
                                    <p className="ml-10 text-lg font-bold">
                                        15 articles
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="relative">
                                    <i className="absolute left-0 text-lg fa-solid fa-mobile-screen"></i>
                                    <p className="ml-10 text-lg font-bold">
                                        Access on mobile and TV
                                    </p>
                                </div>

                                <div className="relative">
                                    <i className="absolute left-0 text-lg fa-solid fa-trophy"></i>
                                    <p className="ml-10 text-lg font-bold">
                                        Certificate of completion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-3 px-4 border border-gray-300 mt-10">
                        <p className="font-medium text-lg">Top companies offer this course to their employees</p>
                        <p className="text-gray-600 -mt-0.5">This course was selected for our collection of top-rated
                            courses trusted by
                            businesses worldwide.
                            <span className="text-secondary-bold underline underline-offset-4">Learn more</span>
                        </p>
                        <div className="flex justify-between py-6">
                            <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                                 alt="Nasdaq"></img>
                            <img className="h-12 w-auto"
                                 src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Nasdaq"></img>
                            <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                                 alt="Nasdaq"></img>
                            <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                                 alt="Nasdaq"></img>
                            <img className="h-12 w-auto"
                                 src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Nasdaq"></img>
                        </div>
                    </div>

                    <div className="bg-grayLight p-8 flex justify-between items-center gap-5 mt-7">
                        <div className="flex flex-col justify-between h-44">
                            <h2 className="font-medium text-3xl">Coding Exercises</h2>
                            <p className="text-gray-600">This course includes our updated coding exercises so you can
                                practice your skills as
                                you learn.</p>
                            <a className="text-secondary-bold underline underline-offset-4 mt-8" href="">See a demo</a>
                        </div>

                        <img className="shadow-lg w-auto h-72"
                             src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png"
                             alt="coding-exp"></img>
                    </div>

                    <div className="mt-8">
                        <h2 className="font-medium text-3xl">Course content</h2>
                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <p>
                                    <span>23 sections</span>
                                    •
                                    <span>156 lectures</span>
                                    •
                                    <span>22h 13m total length</span>
                                </p>
                                <p className="font-medium text-secondary-bold text-lg">Expand all sections</p>
                            </div>

                            <div className="mt-3">
                                <div
                                    className="flex justify-between items-center px-4 py-3 border border-gray-300 bg-grayLight">
                                    <p className="font-medium text-lg">
                                        <i className="fa-solid fa-chevron-down mr-3"></i>
                                        Course Overview
                                    </p>
                                    <div>
                                        <span>5 lectures</span>
                                        <span>•</span>
                                        <span>19min</span>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center px-4 py-3 border border-gray-300 bg-grayLight">
                                    <p className="font-medium text-lg">
                                        <i className="fa-solid fa-chevron-down mr-3"></i>
                                        Course Overview
                                    </p>
                                    <div>
                                        <span>5 lectures</span>
                                        <span>•</span>
                                        <span>19min</span>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center px-4 py-3 border border-gray-300 bg-grayLight">
                                    <p className="font-medium text-lg">
                                        <i className="fa-solid fa-chevron-down mr-3"></i>
                                        Course Overview
                                    </p>
                                    <div>
                                        <span>5 lectures</span>
                                        <span>•</span>
                                        <span>19min</span>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center px-4 py-3 border border-gray-300 bg-grayLight">
                                    <p className="font-medium text-lg">
                                        <i className="fa-solid fa-chevron-down mr-3"></i>
                                        Course Overview
                                    </p>
                                    <div>
                                        <span>5 lectures</span>
                                        <span>•</span>
                                        <span>19min</span>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center px-4 py-3 border border-gray-300 bg-grayLight">
                                    <p className="font-medium text-lg">
                                        <i className="fa-solid fa-chevron-down mr-3"></i>
                                        Course Overview
                                    </p>
                                    <div>
                                        <span>5 lectures</span>
                                        <span>•</span>
                                        <span>19min</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="border border-black hover:bg-gray-100 font-medium py-3 text-center cursor-pointer mt-5"> 13
                                more
                                sections
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="font-medium text-3xl mt-8">Requirements</h2>
                        <div className="flex gap-4 items-center mt-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <p>Access to a computer with an internet connection.</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="font-medium text-3xl mt-8">Description</h2>
                        <p className="my-2">Become a Python Programmer and learn one of employer's most requested skills
                            of 2023!
                            <br></br>
                            <br></br>
                            This is the most comprehensive, yet straight-forward, course for the Python programming
                            language on Udemy!
                            Whether you have never programmed before, already know basic syntax, or want to learn about
                            the advanced
                            features of Python, this course is for you! In this course we will teach you Python 3.
                            <br></br>
                            <br></br>
                            With over 100 lectures and more than 21 hours of video this comprehensive course leaves no
                            stone unturned!
                            This course includes quizzes, tests, coding exercises and homework assignments as well as 3
                            major projects to
                            create a Python project portfolio!
                        </p>
                        <span className="font-medium text-secondary-bold">Show more <i
                            className="fa-solid fa-chevron-down text-xs ml-1"></i></span>
                    </div>

                    <div className="mt-8">
                        <h2 className="font-medium text-3xl mt-8">Instructor</h2>
                        <p className="text-secondary-bold text-xl font-medium underline underline-offset-4 mt-5">Joe
                            Portilla</p>
                        <p className="mt-1 font-public-sans font-bold">Head of Data Science at Pierian Training</p>
                        <div className="flex gap-4 items-center mt-4 h-32">
                            <img className="aspect-square h-full rounded-full"
                                 src="https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg"
                                 alt="instructor-image"></img>
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <span className="ml-2">4.6 Instructor Rating</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-award"></i>
                                    <span className="ml-2">1,148,619 Reviews</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-user-group"></i>
                                    <span className="ml-2">3,777,516 Students</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-circle-play"></i>
                                    <span className="ml-2">83 Courses</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-4">Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa
                            Clara University and
                            years of experience as a professional instructor and trainer for Data Science, Machine
                            Learning and Python
                            Programming. He has publications and patents in various fields such as microfluidics,
                            materials science, and
                            data science. Over the course of his career he has developed a skill set in analyzing data
                            and he hopes to use
                            his experience in teaching and data science to help other people learn the power of
                            programming, the ability
                            to analyze data, and the skills needed to present the data in clear and beautiful
                            visualizations. Currently he
                            works as the Head of Data Science for Pierian Training and provides in-person data science
                            and python
                            programming training courses to employees working at top companies, including General
                            Electric, Cigna,
                            SalesForce, Starbucks, McKinsey and many more. Feel free to check out the website link to
                            find out more
                            information about training offerings.
                        </p>
                        <span className="font-medium text-secondary-bold">Show more <i
                            className="fa-solid fa-chevron-down text-xs ml-1"></i></span>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default CourseDetail