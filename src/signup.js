import React from "react";
import "./assets/images/logo/logo-square.webp";
import "./assets/css/output.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'

let spacing = "#ffffff";
function SignUp() {
    return (
        <div className="w-full min-h-full text-primary overflow-x-hidden">
            {/* <div class="w-full h-16 py-3 px-6 shadow flex items-center justify-between gap-8">
                <img class="py-1.5 h-full w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy"></img>
                <a class=" hover:text-secondary-bold" href="">Categories</a>
                <form
                    class="relative h-full flex-grow rounded-full border-custom border-primary flex items-center py-1 overflow-hidden">
                    <input class="ml-12 mr-4 w-full focus:outline-0" type="text" placeholder="Search for anything"></input>
                    <button class="absolute ml-4" type="submit">
                        <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
                    </button>
                </form>
                <a class=" hover:text-secondary-bold" href="">Plans & Pricing</a>
                <a class=" hover:text-secondary-bold" href="">Udemy Business</a>
                <a class=" hover:text-secondary-bold" href="">Teach on Udemy</a>
                <a href="">
                    <i class="fa-solid fa-cart-shopping "></i>
                </a>
                <div class="flex gap-2 items-center">
                    <button class="font-medium border-custom border-black h-full my-1.5 py-2 px-5 hover:bg-gray-100">Log in</button>
                    <button
                        class="font-medium border-custom border-black h-full my-1.5 py-2 px-5 text-white bg-black hover:bg-gray-800">
                        Sign up
                    </button>
                    <button class="border-custom border-black h-full my-1.5 py-1.5 px-3 hover:bg-gray-100">
                        <i class="fa-solid fa-globe"></i>
                    </button>
                </div>
            </div> */}

            <div class="w-full">
                <form class="w-96 mx-auto my-12 flex flex-col gap-4">
                    <p class="font-medium">Sign up and start learning</p>
                    <div class="flex flex-col gap-2">
                        <div class="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input class="focus:outline-0" type="text" id="name" placeholder="Full name"></input>
                        </div>
                        <div class="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input class="focus:outline-0" type="text" id="email" placeholder="Email"></input>
                        </div>
                        <div class="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input class="focus:outline-0" type="text" id="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div>
                        <input id="checkbox" type="checkbox"></input>
                        <label class="ml-1" for="checkbox">Send me special offers, personalized recommendations, and learning
                            tips.</label>
                    </div>
                    <button type="submit" class="mt-1 bg-purple-600 hover:bg-secondary-dark font-medium text-white py-3">Sign up
                    </button>
                    <p class="text-sm mx-auto">By signing up, you agree to our
                        <a class="text-sm underline underline-offset-4 hover:text-secondary-dark" href="">
                            Terms of Use
                        </a> and <a class="text-sm underline underline-offset-4 hover:text-secondary-dark" href="">
                            Privacy Policy
                        </a>
                    </p>
                    <hr class="border-gray-300"></hr>
                    <div class="flex flex-col items-center gap-1">
                        <p class="mx-auto">Already have an account?
                            <a class="font-medium text-secondary-bold underline underline-offset-4 hover:text-secondary-dark" href="">Log
                                in
                            </a>
                        </p>
                    </div>
                </form>

            </div>

            {/* <div class="w-full bg-grayDark text-white pt-8 mt-10">
                <div class="flex justify-between items-center px-10">
                    <p class="font-medium text-2xl whitespace-nowrap">Top companies choose
                        <span class="text-secondary-light text-2xl font-medium">Udemy Business</span>
                        to build in-demand career skills.
                    </p>
                    <div class="flex gap-6">
                        <img class="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq"></img>
                        <img class="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Nasdaq"></img>
                        <img class="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Nasdaq"></img>
                        <img class="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="Nasdaq"></img>
                        <img class="h-12 w-auto" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Nasdaq"></img>
                    </div>
                </div>

                <hr class="w-full border opacity-10 my-8"></hr>

                <div class="px-10 flex justify-between">
                    <div class="flex w-1/2 justify-between">
                        <div class="flex flex-col gap-2">
                            <a class="font-public-sans hover:underline" href="">Udemy Business</a>
                            <a class="font-public-sans hover:underline" href="">Teach on Udemy</a>
                            <a class="font-public-sans hover:underline" href="">Get the app</a>
                            <a class="font-public-sans hover:underline" href="">About us</a>
                            <a class="font-public-sans hover:underline" href="">Contact us</a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <a class="font-public-sans hover:underline" href="">Careers</a>
                            <a class="font-public-sans hover:underline" href="">Blog</a>
                            <a class="font-public-sans hover:underline" href="">Help and Support</a>
                            <a class="font-public-sans hover:underline" href="">Affiliate</a>
                            <a class="font-public-sans hover:underline" href="">Investors</a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <a class="font-public-sans hover:underline" href="">Terms</a>
                            <a class="font-public-sans hover:underline" href="">Privacy Policy</a>
                            <a class="font-public-sans hover:underline" href="">Cookie settings</a>
                            <a class="font-public-sans hover:underline" href="">Sitemap</a>
                            <a class="font-public-sans hover:underline" href="">Accessibility statement</a>
                        </div>
                    </div>

                    <button class="border border-white h-12 px-6 hover:bg-gray-800 font-bold">
                        <i class="fa-solid fa-globe mr-2" style={{ color: spacing }}></i>
                        English
                    </button>
                </div>

                <div class="px-10 flex justify-between pt-16 pb-28">
                    <img class="h-12 w-auto" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        alt="udemy-logo"></img>
                    <p>© 2024 Udemy, Inc.</p>
                </div>
            </div> */}
        </div>
    );
}

export default SignUp;
