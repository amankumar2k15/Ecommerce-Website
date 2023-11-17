import React from "react";
import { Link, } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const About = () => {

    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumb title="About" />
            <div className="pb-10">


                <div className="max-w-5xl p-2">

                    <h1 className="text-3xl font-bold mb-5">Welcome to ShopHub Ecommerce Website</h1>

                    <p className="mb-4">
                        Founded in 2023, ShopHub began with a single vision - to make online shopping a breeze, and bridge the gap between everyday consumers and high-quality products. Today, we've grown into one of the leading e-commerce platforms, offering an unparalleled selection of products across multiple categories, ensuring that our customers receive only the best.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="mb-4">
                        Our mission is to provide top-tier products at competitive prices, ensuring that our customers don’t have to compromise between quality and affordability. We aim to offer a seamless online shopping experience, backed by outstanding customer service.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">Quality First: Every product on our platform is thoroughly vetted for quality and reliability.</li>
                        <li className="mb-2">Customer-Centric: We pride ourselves on our responsive customer service, ensuring that your queries and concerns are addressed promptly.</li>
                        <li className="mb-2">Secure Shopping: Your safety is our priority. Our site employs advanced encryption techniques to ensure your personal and financial data remains protected.</li>
                        <li className="mb-2">Worldwide Shipping: No matter where you are, we'll get your order to you, thanks to our global shipping partners.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Sustainability</h2>
                    <p className="mb-4">
                        In our quest to offer the best to our customers, we also ensure that our operations leave the smallest carbon footprint. We've adopted sustainable packaging solutions, and we continuously work with our suppliers and partners to promote responsible sourcing and manufacturing.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
                    <p className="mb-4">
                        As we continue to grow, we invite you to be a part of our journey. Whether you're a shopper looking for the latest products, a vendor aiming to reach a broader audience, or just a visitor, your support and feedback drive us to do better.
                    </p>

                    <p className="text-xl mb-4">
                        Thank you for choosing ShopHub Ecommerce Website. Happy shopping!
                    </p>

                </div>

                <Link to="/shop">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
