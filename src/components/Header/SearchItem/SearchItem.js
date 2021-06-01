import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInputValue, getUserData, getRepos, resetUserData } from '../../../actions';
import './search-item.css';

const SearchItem = () => {
  const { searchValue } = useSelector(state => state.app);
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();

  function searchHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newValue = event.target.value.trim();

      if (newValue === searchValue) return;

      setInputValue(newValue);
      dispatch(setSearchInputValue(newValue));

      if (newValue) {
        dispatch(getUserData(newValue));
        dispatch(getRepos(newValue));
      }

      dispatch(resetUserData());
    }
  }

  return (
    <form className="search">
      <div className="search__input-wrapper">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
