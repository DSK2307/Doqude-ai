import React from "react";
import heroimg from "../assets/11.webp";

const Hero = () => {
    return (
        <div className="py-20 ">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 lg:w-2/3">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                            Welcome to our <br className="hidden md:block" />
                            <span className="text-indigo-600">Awesome</span> Website
                        </h1>
                        
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
                            We create beautiful and functional websites for Latest Technology
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                    <img
    src={heroimg}
    alt="Hero Image"
    className="rounded-full shadow-lg w-[85%] max-w-xs md:max-w-none border-4 border-white border-solid 
    bg-gradient-to-r from-blue-500 to-purple-500 p-[6px] transform hover:scale-105 transition duration-500 ease-in-out"
/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
