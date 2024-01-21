import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your stylesheet
import ucscSlugLogo from './ucscslug.png'; // Import the image

const HomePage = () => {
  return (
    <div className="home">
      <header>
        {/* UCSC Slug logo */}
        <img src={ucscSlugLogo} alt="UCSC Slug Logo" className="ucsc-logo" />
        <h1>Sluggit</h1>
      </header>

      <main>
        {/* Content for the Home page goes here */}
        <div className="welcome">
          <h1>Welcome</h1>
          <h2>Choose a category to get started</h2>
        </div>
        <div className="buttons">
          <Link to="/SlugHousing" className="button">Housing</Link>
          {/* Add more buttons for other categories */}
          <Link to="/SlugEvents" className="button">Clubs</Link>
          <Link to="/SlugPals" className="button">SlugPals</Link>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sluggit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
