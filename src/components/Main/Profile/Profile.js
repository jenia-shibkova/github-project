import React from 'react';
import { useSelector } from 'react-redux';
import SocialIcon from './SocialIcon';
import PersonIcon from './PersonIcon';
import Loader from '../../Loader';
import { COUNT_LIMIT } from '../../../constants';
import './profile.css';

const Profile = () => {
  const { isFetchingProfile } = useSelector(state => state.app);
  const { userData } = useSelector(state => state.app);
  let followers;

  if (userData && userData.followers > COUNT_LIMIT) {
    followers = `${(userData.followers / COUNT_LIMIT).toFixed(1)}k`;
  } else {
    followers = userData.followers;
  }

  if (isFetchingProfile) {
    return (
      <aside className="profile profile-loading">
        <Loader />
      </aside>
    );
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
