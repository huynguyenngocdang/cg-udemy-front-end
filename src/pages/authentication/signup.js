import React from "react";
import "../../assets/images/logo/logo-square.webp";
import "../../assets/css/output.css";

function SignUp() {
    return (
        <div className="w-full min-h-full text-primary overflow-x-hidden">
            <div className="w-full">
                <form className="w-96 mx-auto my-12 flex flex-col gap-4">
                    <p className="font-medium">Sign up and start learning</p>
                    <div className="flex flex-col gap-2">
                        <div className="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input className="focus:outline-0" type="text" id="name" placeholder="Full name"></input>
                        </div>
                        <div className="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input className="focus:outline-0" type="text" id="email" placeholder="Email"></input>
                        </div>
                        <div className="w-full h-12 border border-black px-3 py-2 flex items-center">
                            <input className="focus:outline-0" type="text" id="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div>
                        <input id="checkbox" type="checkbox"></input>
                        <label className="ml-1" form="checkbox">Send me special offers, personalized recommendations,
                            and
                            learning
                            tips.</label>
                    </div>
                    <button type="submit"
                            className="mt-1 bg-purple-600 hover:bg-secondary-dark font-medium text-white py-3">Sign up
                    </button>
                    <p className="text-sm mx-auto">By signing up, you agree to our
                        <a className="text-sm underline underline-offset-4 hover:text-secondary-dark" href="">
                            Terms of Use
                        </a> and <a className="text-sm underline underline-offset-4 hover:text-secondary-dark" href="">
                            Privacy Policy
                        </a>
                    </p>
                    <hr className="border-gray-300"></hr>
                    <div className="flex flex-col items-center gap-1">
                        <p className="mx-auto">Already have an account?
                            <a className="font-medium text-secondary-bold underline underline-offset-4 hover:text-secondary-dark"
                               href="">Log
                                in
                            </a>
                        </p>
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

export default SignUp;
