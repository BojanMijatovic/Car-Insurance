import React from 'react';
import { Rating } from 'semantic-ui-react';
import './UserCard.styles.scss';

const UserCard = () => {
  return (
    <div className='user-card'>
      <h2>Level</h2>
      <div className='card-description'>
        <h3>Silver</h3>
        <Rating icon='star' defaultRating={2} maxRating={3} size='large' disabled />
      </div>
    </div>
  );
};

export default UserCard;
