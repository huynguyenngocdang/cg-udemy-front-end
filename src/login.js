import React from "react";
import "./assets/images/logo/logo-square.webp";
import "./assets/css/output.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import axios from 'axios';

let spacing = "#ffffff";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let loginDto = {
            username: document.querySelector("input[name='username']").value,
            password: document.querySelector("input[name='password']").value,
        };
        let requestBody = { loginDto };
        console.log(requestBody);
        console.log(typeof requestBody);

        try {
            const response = await axios({
                url: `http://localhost:8080/api/auth/login`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(requestBody)
            });

            localStorage.setItem("accessToken", response.data.token);
            let result = JSON.stringify(response.data);
            console.log(result);
            var msg = new SpeechSynthesisUtterance();
            msg.text = "Login Successfully";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
            window.location.href = "/";
        } catch (error) {
            var msg = new SpeechSynthesisUtterance();
            msg.text = "Login fail";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
            console.error(error);
        }
    };
    return (
        <div className="w-full min-h-full text-primary overflow-x-hidden">
            {/* <div className="w-full h-16 py-3 px-6 shadow flex items-center justify-between gap-8">
                <img className="py-1.5 h-full w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy"></img>
                <a className=" hover:text-secondary-bold" href="">Categories</a>
                <form
                    className="relative h-full flex-grow rounded-full border-custom border-primary flex items-center py-1 overflow-hidden">
                    <input className="ml-12 mr-4 w-full focus:outline-0" type="text" placeholder="Search for anything"></input>
                    <button className="absolute ml-4" type="submit">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            css={css`color: gray;`}
                        />
                    </button>
                </form>
                <a className=" hover:text-secondary-bold" href="">Plans & Pricing</a>
                <a className=" hover:text-secondary-bold" href="">Udemy Business</a>
                <a className=" hover:text-secondary-bold" href="">Teach on Udemy</a>
                <a href="">
                    <i className="fa-solid fa-cart-shopping "></i>
                </a>
                <div className="flex gap-2 items-center">
                    <button className="font-medium border-custom border-black h-full my-1.5 py-2 px-5 hover:bg-gray-100">Log in</button>
                    <button
                        className="font-medium border-custom border-black h-full my-1.5 py-2 px-5 text-white bg-black hover:bg-gray-800">
                        Sign up
                    </button>
                    <button className="border-custom border-black h-full my-1.5 py-1.5 px-3 hover:bg-gray-100">
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                </div>
            </div> */}

            <div className="w-full">
                <form onSubmit={handleSubmit} className="w-96 mx-auto my-12 flex flex-col gap-4">
                    <p className="font-medium">Log in to your Udemy account</p>
                    <div className="flex flex-col gap-2">
                        <button className="hover:bg-gray-100 w-full h-12 border border-black flex items-center px-3 py-2 gap-2">
                            <img className="w-6 h-6" src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png"
                                alt=""></img>
                            <span className="font-medium">Continue with Google</span>
                        </button>
                        <button className="hover:bg-gray-100 w-full h-12 border border-black flex items-center px-3 py-2 gap-2">
                            <img className="w-6 h-6"
                                src="https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png"
                                alt=""></img>
                            <span className="font-medium">Continue with Facebook</span>
                        </button>
                        <button className="hover:bg-gray-100 w-full h-12 border border-black flex items-center px-3 py-2 gap-2">
                            <img className="w-6 h-6" src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png"
                                alt=""></img>
                            <span className="font-medium">Continue with Apple</span>
                        </button>
                        <div className="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input name="username" className="font-medium focus:outline-0" type="text" id="email" placeholder="Email"
                                value={username} onChange={e => setUsername(e.target.value)}></input>
                        </div>
                        <div className="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input name="password" className="font-medium focus:outline-0" id="password" placeholder="Password"
                                type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <button type="submit" className="mt-1 bg-purple-600 hover:bg-secondary-dark font-medium text-white py-3">Log
                        in</button>
                    <p className="mx-auto">or
                        <a className="font-medium text-secondary-bold underline underline-offset-4 hover:text-secondary-dark"
                            href="">Forgot
                            Password</a>
                    </p>
                    <hr className="border-gray-300"></hr>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm mx-auto">Don't have an account?
                            <a className="text-sm font-medium text-secondary-bold underline underline-offset-4 hover:text-secondary-dark"
                                href="">Sign up</a>
                        </p>
                        <a className="font-medium text-sm underline text-secondary-bold underline-offset-4" href="">Log in with your
                            organization</a>
                    </div>
                </form>

            </div>

            {/* <div className="w-full bg-grayDark text-white pt-8 mt-10">
                <div className="flex justify-between items-center px-10">
                    <p className="font-medium text-2xl whitespace-nowrap">Top companies choose
                        <span className="text-secondary-light text-2xl font-medium">Udemy Business</span>
                        to build in-demand career skills.
                    </p>
                    <div className="flex gap-6">
                        <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq"></img>
                        <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Nasdaq"></img>
                        <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Nasdaq"></img>
                        <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="Nasdaq"></img>
                        <img className="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Nasdaq"></img>
                    </div>
                </div>

                <hr className="w-full border opacity-10 my-8"></hr>

                <div className="px-10 flex justify-between">
                    <div className="flex w-1/2 justify-between">
                        <div className="flex flex-col gap-2">
                            <a className="font-public-sans hover:underline" href="">Udemy Business</a>
                            <a className="font-public-sans hover:underline" href="">Teach on Udemy</a>
                            <a className="font-public-sans hover:underline" href="">Get the app</a>
                            <a className="font-public-sans hover:underline" href="">About us</a>
                            <a className="font-public-sans hover:underline" href="">Contact us</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a className="font-public-sans hover:underline" href="">Careers</a>
                            <a className="font-public-sans hover:underline" href="">Blog</a>
                            <a className="font-public-sans hover:underline" href="">Help and Support</a>
                            <a className="font-public-sans hover:underline" href="">Affiliate</a>
                            <a className="font-public-sans hover:underline" href="">Investors</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a className="font-public-sans hover:underline" href="">Terms</a>
                            <a className="font-public-sans hover:underline" href="">Privacy Policy</a>
                            <a className="font-public-sans hover:underline" href="">Cookie settings</a>
                            <a className="font-public-sans hover:underline" href="">Sitemap</a>
                            <a className="font-public-sans hover:underline" href="">Accessibility statement</a>
                        </div>
                    </div>

                    <button className="border border-white h-12 px-6 hover:bg-gray-800 font-bold">
                        <i className="fa-solid fa-globe mr-2" style={{ color: spacing }}></i>
                        English
                    </button>
                </div>

                <div className="px-10 flex justify-between pt-16 pb-28">
                    <img className="h-12 w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        alt="udemy-logo"></img>
                    <p>© 2024 Udemy, Inc.</p>
                </div>
            </div> */}
        </div>
    );
}

export default Login;
