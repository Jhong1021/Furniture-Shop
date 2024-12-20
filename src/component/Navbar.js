import React from "react";
import Logo from '../assets/images/logotimber.png';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 mb-2 px-4 shadow backdrop-blur-md bg-white/30">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-15 w-24 mr-2" // Adjust height, width, and spacing as needed
                    />
                </a>

                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label
                    className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.88em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
                >
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li>
                            <a className="text-gray-600 hover:text-blue-600" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-blue-600" href="#products">
                                Products
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-blue-600" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li className="mt-2 sm:mt-0">
                            <a className="rounded-xl border-2 border-green-600 px-6 py-2 font-medium text-green-600 hover:bg-green-600 hover:text-white" href="#">
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
