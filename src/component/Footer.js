import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                <div className="max-w-sm">
                    <div className="mb-6 flex h-12 items-center space-x-2">
                        <span className="text-2xl font-bold text-green-900 ">Timber & Trend</span>
                    </div>
                    <div className="text-gray-500">
                        Transform Your Space, Define Your Style – Furniture That Feels Like Home.
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
                    <div className="text-gray-500">
                        35 Remida Heights, <br />
                        45 Street, <br />
                        Taguig Metro Manila, PH
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                    <nav aria-label="Footer Navigation" className="text-gray-500">
                        <ul className="space-y-3">
                            <li><a className="hover:text-blue-600 hover:underline" href="#home">Home</a></li>
                            <li><a className="hover:text-blue-600 hover:underline" href="#product">Products</a></li>
                            <li><a className="hover:text-blue-600 hover:underline" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">Subscribe to our Monthly Promo Code.</div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <input
                                type="email"
                                className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                placeholder="Enter your email"
                            />
                            <button className="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
                    <div className="">© 2024 Joene Tuban | All Rights Reserved</div>
                    <div className="">
                        <a className="" href="#">Privacy Policy</a>
                        <span>|</span>
                        <a className="" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
