import React from "react";
import "./header.scss";
import SearchBar from "../search/SearchBar";
import logo from "./images/logo.png";

/**
 * logo
 * search component
 */
const Header = () => (
  <nav role='navigation'>
    <div className='nav-wrapper container'>
      <div id='logo-container' className='brand-logo hide-on-small-only'>
        <img src={logo} alt='logo' width='200' />
      </div>
      <div className='row'>
        <div className='col s12 m6 offset-m6'>{<SearchBar />}</div>
      </div>
      <ul id='nav-mobile' className='sidenav'>
        <li>Navbar Link</li>
      </ul>
    </div>
  </nav>
);

export default Header;
