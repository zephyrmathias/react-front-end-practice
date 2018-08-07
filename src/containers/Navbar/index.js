import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sticky-table">Sticky Table</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
