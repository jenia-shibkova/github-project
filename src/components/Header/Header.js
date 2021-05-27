import React from 'react';
import './header.css';
import Logo from './Logo';
import SearchItem from './SearchItem';

const Header = () => (
  <header className="header">
    <div className="header__wrapper container">
      <Logo />
      <SearchItem />
    </div>
  </header>
);

export default Header;