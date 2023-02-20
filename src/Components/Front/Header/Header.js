import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Header.css";


const Header = () => {
  const history = useHistory();
  return (
    <header className='header'>
      <div>
        <h1>
          <a href="/" className='logo'>DashBoard</a>
        </h1>
      </div>
      <div className='Header-links'>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/Cart">Cart</a>
            <i></i>
          </li>
        </ul>
        <ul>

        </ul>

      </div>

    </header>
  );
}

export default Header;
