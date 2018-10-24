import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const NavBar = (props) => {

  let date = moment().format('Do MMMM YYYY');

  const handleClick = (category) => {
    window.location = "/articles/category/" + category;
  }

  return (
    <header>
      <nav>
        <div className="search"></div>
        <div className="banner"></div>
        <div className="date">{date}</div>
        <ul className="navBar">
          <li className="navLink"><Link to="/home">Home</Link></li>
          <li className="navLink" onClick={() => {handleClick("uk")}}>UK</li>
          <li className="navLink" onClick={() => {handleClick("world")}}>World</li>
          <li className="navLink" onClick={() => {handleClick("politics")}}>Politics</li>
          <li className="navLink" onClick={() => {handleClick("tech")}}>Tech</li>
          <li className="navLink" onClick={() => {handleClick("business")}}>Business</li>
          <li className="navLink" onClick={() => {handleClick("education")}}>Education</li>
          <li className="navLink" onClick={() => {handleClick("environment")}}>Environment</li>
          <li className="navLink" onClick={() => {handleClick("sports")}}>Sport</li>
          <li className="navLink" onClick={() => {handleClick("celebrity")}}>Celebrity</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;
