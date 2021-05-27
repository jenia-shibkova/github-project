import React from 'react';
import './search-item.css';

const SearchItem = () => (
  <form className="search">
    <div className="search__input-wrapper">
      <input 
        type="text" 
        className="search__input" 
        name="text" 
        placeholder="Enter GitHub username" 
        autoComplete="off"/>
    </div>
  </form>
)

export default SearchItem;