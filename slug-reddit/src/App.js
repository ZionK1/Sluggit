import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// SCREENS
import Home from './screens/Home';
import SlugPals from './screens/SlugPals';
import SlugHousing from './screens/SlugHousing';
import SlugEvents from './screens/SlugEvents';

// Custom component to display titles
const PageWithTitle = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

// Navigation bar component
const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/SlugEvents">Slug Events</Link></li>
      <li><Link to="/SlugPals">Slug Pals</Link></li>
      <li><Link to="/SlugHousing">Slug Housing</Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path=""
          element={<PageWithTitle title="Home"><Home /></PageWithTitle>}
        />
        <Route
          path="/Home"
          element={<PageWithTitle title="Home"><Home /></PageWithTitle>}
        />
        <Route
          path="/SlugEvents"
          element={<PageWithTitle title="Slug Events"><SlugEvents /></PageWithTitle>}
        />
        <Route
          path="/SlugPals"
          element={<PageWithTitle title="Slug Pals"><SlugPals /></PageWithTitle>}
        />
        <Route
          path="/SlugHousing"
          element={<PageWithTitle title="Slug Housing"><SlugHousing /></PageWithTitle>}
        />
      </Routes>
    </Router>
  );
}

export default App;
