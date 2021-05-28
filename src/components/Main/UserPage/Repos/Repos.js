import React from 'react';
import './repos.css';
import RepoItem from './RepoItem';

const Repos = () => (
  <div className="repos">
    <h2 className="repos__title">Repositories (249)</h2>
    <ul className="repos__list">
      <RepoItem />
      <RepoItem />
      <RepoItem />
    </ul>
  </div>
);

export default Repos;
