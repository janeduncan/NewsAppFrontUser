import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const NavBar = (props) => {

  let date = moment().format('Do MMMM YYYY');

  return (
    <header>
      <nav>
        <div className="search"></div>
        <div className="banner"></div>
        <div className="date">{date}</div>
        <ul className="navBar">
          <li className="navLink"><Link to="/home">Home</Link></li>
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
