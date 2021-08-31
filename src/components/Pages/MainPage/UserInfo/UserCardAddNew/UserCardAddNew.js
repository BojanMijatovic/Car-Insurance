import React from 'react';
import { Icon } from 'semantic-ui-react';

import './UserCardAddNew.styles.scss';

const UserCardAddNew = () => {
  return (
    <div className='user-card-add-new'>
      <h2>Points</h2>
      <div className='card-description'>
        <h3>+3</h3>
        <Icon name='check square outline' size='large' color='green' />
      </div>
    </div>
  );
};

export default UserCardAddNew;
