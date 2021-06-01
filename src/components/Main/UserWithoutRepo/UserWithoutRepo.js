import React from 'react';
import Profile from '../Profile';
import Repos from '../Repos';

const UserWithoutRepo = () => (
  <main className="user container">
    <Profile />
    <Repos />
  </main>
);

export default UserWithoutRepo;