import React from "react";

const Hero = () => {
    return (
        <div className="text-center py-12">
            <p className="text-xl font-semibold text-white">
                Leading the future of technology with innovation and creativity
            </p>
            <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mt-4">
                Transforming Ideas into Reality
            </h1>
            <p className="text-lg text-white mt-4">
                Explore how our cutting-edge solutions are shaping industries and empowering businesses for a brighter tomorrow.
            </p>
            <div className="mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Hero;
