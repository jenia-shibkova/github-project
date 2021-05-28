import React from 'react';
import './repo-item.css';

const RepoItem = () => (  
  <li className="repo-item">
    <h3 className="repo__title">
      <a className="repo__title-link" href="https://github.com/" target="_black">react-hot-loader</a>      
    </h3>
    <p className="repo__description">
      Tweak React components in real time. (Deprecated: use Fast Refresh instead.
    </p>
  </li>
);

export default RepoItem;
