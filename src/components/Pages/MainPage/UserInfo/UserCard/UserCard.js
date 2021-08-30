import React from 'react';
import { Card, Rating } from 'semantic-ui-react';
import './UserCard.styles.scss';

const UserCard = () => {
  return (
    <Card className='user-card'>
      <h2>Level</h2>
      <div className='card-description'>
        <h3>Silver</h3>
        <Rating icon='star' defaultRating={2} maxRating={3} size='large' disabled />
      </div>
    </Card>
  );
};

export default UserCard;
