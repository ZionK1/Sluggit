import React from 'react';
import './style.css'; // Import your stylesheet
import ucscSlugLogo from './ucscslug.png'; // Import the image

const HomePage = () => {
  return (
    <div>
      <header>
        {/* UCSC Slug logo */}
        <img src={ucscSlugLogo} alt="UCSC Slug Logo" className="ucsc-logo" />

        {/* Sluggit main header */}
        <div className="header-content">
          <h1>Sluggit</h1>

          {/* Navigation */}
          <nav>
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="slugPals.html">SlugPals</a></li>
              <li><a href="slugHousing.html">SlugHousing</a></li>
              <li><a href="slugEvents.html">SlugEvents</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Content for the Home page goes here */}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sluggit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
