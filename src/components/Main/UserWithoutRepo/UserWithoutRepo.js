import React from 'react';
import './user-without-repo.css';
import Profile from '../Profile';
import Repos from '../Repos';

const UserWithoutRepo = () => (
  <main className="user container">
    <Profile />
    <Repos />
  </main>
);

export default UserWithoutRepo;