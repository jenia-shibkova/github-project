import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';
import SocialIcon from './SocialIcon';
import PersonIcon from './PersonIcon';
import { COUNT_LIMIT } from '../../../../constants';

const Profile = () => {
  const { userData } = useSelector(state => state.repos);
  let followers;

  if (userData && userData.followers > COUNT_LIMIT) {
    followers = `${(userData.followers / COUNT_LIMIT).toFixed(1)}k`;
  } else {
    followers = userData.followers;
  }

  return (
    <aside className="profile">
      <img 
        className="avatar"
        width="280" 
        height="280"
        src={userData.avatar}
        alt={userData.name} />

      <h1 className="profile__title">{userData.name}</h1>

      <a 
        className="profile__username"
        href={userData.htmlUrl}
        target="blank"
      >{userData.login}</a> 
      
      <div className="details">
        <div className="details__followers">
          <SocialIcon />
          <span className="details__value"><span>{followers}</span> followers</span>
        </div>
        <div className="details__following">
          <PersonIcon />
          <span className="details__value"><span>{userData.following}</span> following</span>
        </div>
      </div>
    </aside>   
  );
};

export default Profile;
