import React from "react";
import Chair1 from '../assets/images/chair1.jpg';
import Chair2 from '../assets/images/chair2.jpg';
import Sofa1 from '../assets/images/sofa1.jpg';
import Sofa2 from '../assets/images/sofa2.jpg';
import Bed1 from '../assets/images/bed11.webp';
import Bed2 from '../assets/images/bed2.webp';
import Cabinet1 from '../assets/images/cabinet1.webp';
import Cabinet2 from '../assets/images/cabinet3.jpg';

const Product = ({ addToCart }) => {
    const products = [
        {
            id: 1,
            image: Chair1,
            title: "ENSHOLM",
            price: "₱1,225",
            originalPrice: "₱1750",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 2,
            image: Chair2,
            title: "ARSUNDA",
            price: "₱2,793",
            originalPrice: "₱3,990",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 3,
            image: Sofa1,
            title: "ANGERSBY",
            price: "₱9,093",
            originalPrice: "₱12,990",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 4,
            image: Sofa2,
            title: "HAMMARN",
            price: "₱9,093",
            originalPrice: "₱12,990",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 5,
            image: Bed1,
            title: "MALM",
            price: "₱16,793",
            originalPrice: "₱23,990",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 6,
            image: Bed2,
            title: "TUFJORD",
            price: "₱12,600",
            originalPrice: "₱18,000",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 7,
            image: Cabinet1,
            title: "IVAR",
            price: "₱4,515",
            originalPrice: "₱6,450",
            discount: "30% OFF",
            rating: 5,
        },
        {
            id: 8,
            image: Cabinet2,
            title: "Turkana TV Cabinet",
            price: "₱6,643",
            originalPrice: "₱9,490",
            discount: "30% OFF",
            rating: 5,
        },
    ];

    return (
        <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                >
                    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                        <img
                            className="object-cover"
                            src={product.image}
                            alt={product.title}
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                            {product.discount}
                        </span>
                    </div>
                    <div className="mt-4 px-5 pb-5">
                        <h5 className="text-xl tracking-tight text-slate-900">
                            {product.title}
                        </h5>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">
                                    {product.price}
                                </span>
                                <span className="text-sm text-slate-900 line-through">
                                    {product.originalPrice}
                                </span>
                            </p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        aria-hidden="true"
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                    {product.rating}
                                </span>
                            </div>
                        </div>
                        <button
                            className="flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                            onClick={() => addToCart(product)}
                        >
                            Add to cart
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
