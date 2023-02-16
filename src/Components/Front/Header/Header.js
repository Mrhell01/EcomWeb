import React from 'react'
// import { Link } from 'react-router-dom';
import "./Header.css"
import ProductFilter from '../Products/ProductFilter';

const Header = () => {
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
                  <a href="/">Home</a>
                  </li>
              </ul>
              <ul>
                  <li>
                      <a href="/Cart">Cart</a>
                      <i></i>
                  </li>
        </ul>
        <ul>
          <li>
          <ProductFilter className="filter"></ProductFilter>
          </li>
        </ul>
      
      </div>
      
        </header>
  );
}

export default Header;
