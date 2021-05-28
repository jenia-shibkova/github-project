import React from 'react';
import './profile.css';
import SocialIcon from './SocialIcon';
import PersonIcon from './PersonIcon';

const Profile = () => (
  <aside className="profile">
    <img 
      className="avatar"
      width="280" 
      height="280"
      src="https://avatars.githubusercontent.com/u/18427549?v=4"
      alt="user" />

    <h1 className="profile__title">Dan Abramov</h1>

    <a 
      className="profile__username"
      href="https://github.com/"
    >gaearon</a> 
    
    <div className="details">
      <div className="details__followers">
        <SocialIcon />
        <span className="details__value">65.8k followers</span>
      </div>
      <div className="details__following">
        <PersonIcon />
        <span className="details__value">171 following</span>
      </div>
    </div>
  </aside>   
);

export default Profile;
