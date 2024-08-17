import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/Logout';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user);
  return (
    <header className="header">
      <nav>
        <ul>
        {userName && (
          <li>
            {userName}
          </li>    
            )}
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/create-product">Create Product</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Logout />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
