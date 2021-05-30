import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchInputValue, getRepos } from '../../../actions';
import './search-item.css';

const SearchItem = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  function searchHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(event.target.value)
      setSearchValue(event.target.value); 

      dispatch(setSearchInputValue(searchValue));
      dispatch(getRepos(searchValue));
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
