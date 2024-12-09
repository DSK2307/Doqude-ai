import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/react.svg";

const Navbar = ({ onShowFeedbackForm }) => {
    return (
        <div>
            <div className="w-4/5 py-4 m-auto flex justify-between items-center ">
                <img src={Logo} alt="Logo" className="w-12 h-12  -mt-2" />
                {/* Rest of your Navbar code */}

                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                    className="hidden md:flex items-center space-x-5"
                >
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold"
                    >
                        <a href="/">Home</a>
                    </motion.li>

                    {/* Feed Link (Toggles the FeedbackForm visibility) */}
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold"
                    >
                        <button onClick={onShowFeedbackForm}>Feed</button> {/* Button to toggle visibility */}
                    </motion.li>

                    {/* Other Links */}
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold"
                    >
                        <a href="#">Features</a>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-800 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold"
                    >
                        <a href="#">About</a>
                    </motion.li>
                </motion.ul>

                {/* Register Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative px-5 py-2 bg-white text-gray-800 font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg group border-2 border-transparent"
                >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                        <span className="block h-full w-full bg-white rounded-full group-hover:bg-transparent transition-colors duration-300"></span>
                    </span>
                    <span className="relative z-10">Register</span>
                </motion.button>
            </div>

            {/* Divider between Navbar and Hero Section */}
            <div className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4"></div>
        </div>
    );
};

export default Navbar;
