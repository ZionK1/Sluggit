import React from 'react';
import './style.css'; // Import your stylesheet
import ucscSlugLogo from './ucscslug.png'; // Import the image

const HomePage = () => {
  return (
    <div class="home">
      <header>
        {/* UCSC Slug logo */}
        <img src={ucscSlugLogo} alt="UCSC Slug Logo" className="ucsc-logo" />
        <h1>Sluggit</h1>
      </header>

      <main>
        {/* Content for the Home page goes here */}
        <div class="welcome">
          <h1>Welcome</h1>
          <h2>Choose a category to get started</h2>
        </div>
        <div class="buttons">
          <div class="button">Housing</div>
          <div class="button">Clubs</div>
          <div class="button">SlugPals</div>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sluggit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
