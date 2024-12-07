import React, { useState } from "react";
import { motion } from "framer-motion";

const FeedbackForm = () => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    // State to store submission status message
    const [message, setMessage] = useState("");

    // Handles changes in form fields and updates state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handles form submission and sends data to Google Forms
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior

        // Google Forms URL for receiving responses
        const formUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLScH1__35mhgHDJ107xAhnOitooyp8r_a_FH1HgpwwZL-PrL_w/formResponse";

        // Map form data to Google Forms entry IDs
        const formDataToSend = new FormData();
        formDataToSend.append("entry.1012963914", formData.name);
        formDataToSend.append("entry.1804964932", formData.email);
        formDataToSend.append("entry.1570386271", formData.feedback);

        // Send form data to Google Forms
        fetch(formUrl, {
            method: "POST",
            mode: "no-cors", // Prevents CORS errors
            body: formDataToSend,
        })
            .then(() => {
                // On success, display a thank-you message and reset form
                setMessage("Thank you! Your feedback has been submitted.");
                setFormData({ name: "", email: "", feedback: "" });
            })
            .catch(() => {
                // On error, display a failure message
                setMessage("Something went wrong. Please try again.");
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Final state for animation
            transition={{ duration: 0.5, ease: "easeOut" }} // Animation timing
            className="bg-white p-8 max-w-xl mx-auto my-12 rounded-lg shadow-lg"
        >
            {/* Animated heading */}
            <motion.h2
                initial={{ x: "-100vw" }} // Starts off-screen
                animate={{ x: 0 }} // Slides into view
                transition={{ type: "spring", stiffness: 50 }} // Spring animation for smooth effect
                className="text-3xl font-bold text-purple-700 text-center mb-6"
            >
                We Value Your Feedback!
            </motion.h2>
            
            {/* Feedback form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input field */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Fade and slide up
                    animate={{ opacity: 1, y: 0 }} // Fully visible and in place
                    transition={{ delay: 0.2 }} // Delay for staggered effect
                >
                    <label className="block text-purple-800 font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50"
                        placeholder="Enter your name"
                    />
                </motion.div>

                {/* Email input field */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <label className="block text-purple-800 font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50"
                        placeholder="Enter your email"
                    />
                </motion.div>

                {/* Feedback textarea */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <label className="block text-purple-800 font-semibold">
                        Feedback
                    </label>
                    <textarea
                        name="feedback"
                        rows="4"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50"
                        placeholder="We’d love to hear your thoughts!"
                    />
                </motion.div>

                {/* Submit button with animations */}
                <motion.button
                    whileHover={{ scale: 1.05 }} // Slightly enlarges on hover
                    whileTap={{ scale: 0.95 }} // Shrinks slightly on click
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-md shadow-lg hover:from-purple-600 hover:to-purple-800 transition"
                >
                    Submit
                </motion.button>
            </form>

            {/* Thank-you message with fade-in animation */}
            {message && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-green-600 font-medium mt-4"
                >
                    {message}
                </motion.p>
            )}
        </motion.div>
    );
};

export default FeedbackForm;
