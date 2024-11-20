// src/components/Home.js

import React from 'react';
import backgroundImage from '../assets/images/home.jpg'; // Ensure the image path is correct

const Home = () => {
    return (
        <section id='home'
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Using the imported image for the background
            }}
        >
            {/* Darker Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-20" // Darker overlay with 75% opacity
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left lg:text-left">
                    <h1 className="text-3xl font-extrabold text-green-900 sm:text-5xl">
                        Timber & Trend
                    </h1>

                    <p className="mt-4 max-w-lg text-green-700 sm:text-xl/relaxed">
                        Transform Your Space, Define Your Style – Furniture That Feels Like Home.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-1 text-center sm:text-left lg:text-left">
                        {/* Button with Green Background and White Text */}
                        <a
                            href="#products"
                            className="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-green-700 px-5 py-3 font-medium text-white hover:bg-green-800"
                        >
                            Shop Now
                        </a>

                        {/* Button with White Background and Green Text */}
                        <a
                            href="#"
                            className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-green-700 shadow hover:bg-green-50"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
