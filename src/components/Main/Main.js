import React from 'react';
import { useSelector } from 'react-redux';
import InitialContent from './InitialContent';
// import EmptyContent from './EmptyContent';
import UserPage from './UserPage';

const Main = () => {
  const { searchValue } = useSelector(state => state.repos);


  
  if (!searchValue) {
    return (
      <>
        <InitialContent />
      </>
    );
  }

  if (searchValue) {    
    console.log(searchValue)
  }

  return (
    <>
      <UserPage />
    </>
  );
}

export default Main;
