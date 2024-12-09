import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import Hero from "./components/hero";
import "./App.css";
import Stats from "./components/About";

const App = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State to toggle the feedback form visibility

  // Toggle the visibility of FeedbackForm
  const handleShowFeedbackForm = () => {
    setShowFeedbackForm(true); // Show FeedbackForm and hide others
  };

  return (
    <div>
      <div className="area bg-cover">
        <ul className="circles absolute top-0 left-0 w-full h-full z-[-1]">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        {/* Pass handleShowFeedbackForm function to Navbar as a prop */}
        <Navbar onShowFeedbackForm={handleShowFeedbackForm} />

        {/* Conditionally render FeedbackForm or other components */}
        {showFeedbackForm ? (
          <FeedbackForm />
        ) : (
          <>
            <Hero />
            <Stats />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
