import React from 'react';
import './user-page.css';
import Profile from '../Profile';
import Repos from '../Repos';

const UserPage = () => (
  <main className="user container">
    <Profile />
    <Repos />
  </main>
);

export default UserPage;
