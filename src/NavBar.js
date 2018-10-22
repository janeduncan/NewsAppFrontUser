import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <nav>
        <ul className="navBar">
          <li className="navLink"><Link to=".">UK</Link></li>
          <li className="navLink"><Link to=".">World</Link></li>
          <li className="navLink"><Link to=".">Politics</Link></li>
          <li className="navLink"><Link to=".">Tech</Link></li>
          <li className="navLink"><Link to=".">Business</Link></li>
          <li className="navLink"><Link to=".">Education</Link></li>
          <li className="navLink"><Link to=".">Environment</Link></li>
          <li className="navLink"><Link to=".">Sport</Link></li>
          <li className="navLink"><Link to=".">Celebrity</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;
