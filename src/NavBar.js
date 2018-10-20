import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

        <ul className="navBar">
          <li className="navLink">
            <Link to="">Home</Link>
          </li>
          <li className="navLink">
            <Link to="">User</Link>
          </li>
          <li className="navLink">
            <Link to="">Article</Link>
          </li>
        </ul>

    </header>
  )
}

export default NavBar;
