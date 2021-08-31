import React from 'react';
import { Rating } from 'semantic-ui-react';
import './UserCardLevel.styles.scss';

const UserCardLevel = () => {
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

export default UserCardLevel;
