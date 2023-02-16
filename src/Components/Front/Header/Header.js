import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
      <header className='header'>
          <div>
              <h1>
                    <Link to = "/" className="logo"> MyWebsite</Link>
              </h1>
          </div>
          <div className='Header-links'>
          <ul>
                  <li>
                  <Link to = "/"> Home </Link>
                  </li>
              </ul>
              <ul>
                  <li>
                      <Link to="/"> Cart </Link>
                      <i></i>
                  </li>
            </ul>
          </div>
        </header>
  );
}

export default Header;
