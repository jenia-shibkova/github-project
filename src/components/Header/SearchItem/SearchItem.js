import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchInputValue, getRepos, resetUserData } from '../../../actions';
import './search-item.css';

const SearchItem = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  function searchHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      setSearchValue(event.target.value);
      dispatch(setSearchInputValue(searchValue));

      if (searchValue) {
        dispatch(getRepos(searchValue));
      }
      
      dispatch(resetUserData());
    }
  }

  return (
    <form className="search">
      <div className="search__input-wrapper">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={searchHandler}
          type="text"
          className="search__input"
          name="text"
          placeholder="Enter GitHub username"
          autoComplete="off"
        />
      </div>
    </form>
  )
};

export default SearchItem;
