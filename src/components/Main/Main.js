import React from 'react';
import { useSelector } from 'react-redux';
import InitialContent from './InitialContent';
import EmptyContent from './EmptyContent';
import UserPage from './UserPage';
import UserWithoutRepo from './UserWithoutRepo';
import Loader from '../Loader';
import { isNotFound } from '../../utils';
import './main.css';

const Main = () => {
  const { isFetchingProfile } = useSelector(state => state.app);
  const { searchValue } = useSelector(state => state.app);
  const { userData } = useSelector(state => state.app);
  const { reposCount } = userData;

  if (!searchValue) {
    return (
      <>
        <InitialContent />
      </>
    );
  }

  if (isFetchingProfile) {
    return (
      <div className="main-loader">
        <Loader />
      </div>
    );
  }

  if (isNotFound(reposCount)) {
    return (
      <>
        <EmptyContent />
      </>
    );
  }

  if (reposCount === 0) {
    return (
      <>
        <UserWithoutRepo />
      </>
    );
  }

  return (
    <>
      <UserPage />
    </>
  );
}

export default Main;
