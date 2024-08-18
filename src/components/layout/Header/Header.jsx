import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/Logout';
import styles from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user);
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {userName && (
            <li className={styles.username}>
              {userName}
            </li>    
          )}
          
          <li>
            <Link to="/">Home</Link>
          </li>
         
          {isAuthenticated && (
             <>
             <li>
             <Link to="/products">Products</Link>
           </li>
           <li>
             <Link to="/create-product">Create Product</Link>
           </li>
            <li>
              <Logout />
            </li>
             </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
