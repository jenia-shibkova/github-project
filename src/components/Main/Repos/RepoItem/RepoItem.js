import React from 'react';
import './repo-item.css';

const RepoItem = (props) => {
  /* eslint-disable */
  const { id, name, url, description } = props;
  return (  
    <li id={id} className="repo-item">
      <h3 className="repo__title">
        <a className="repo__title-link" href={url} target="_black">{name}</a>      
      </h3>
      <p className="repo__description">
        {description}
      </p>
    </li>
  );
}

export default RepoItem;
