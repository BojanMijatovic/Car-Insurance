import React from 'react';
import { Icon } from 'semantic-ui-react';

import './UserCardPoints.styles.scss';

const UserCardPoints = () => {
  return (
    <div className='user-card-points'>
      <h2>Points</h2>
      <div className='card-description'>
        <h3>50</h3>
        <Icon name='id badge' size='large' color='pink' />
      </div>
    </div>
  );
};

export default UserCardPoints;
