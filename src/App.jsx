import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import Hero from './components/hero';
import './App.css';
import Pr from './components/Pr';
import Insights from './components/insights';
import Footer from './components/Footer';
import Test from './components/Test';
import Stats from './components/Stats';

const App = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State to toggle the feedback form visibility

  // Toggle the visibility of FeedbackForm
  const handleShowFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm); 
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

        {/* Conditionally render the FeedbackForm based on showFeedbackForm state */}
        {showFeedbackForm && <FeedbackForm />}

        {/* Other components */}
        <Hero />
        <Insights />
        <Footer />
        <Pr />
        <Stats />
        <Test />
      </div>
    </div>
  );
};

export default App;
