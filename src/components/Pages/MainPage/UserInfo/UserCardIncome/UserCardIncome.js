import React from 'react';
import { Icon } from 'semantic-ui-react';
import './UserCardIncome.styles.scss';

const UserCardIncome = () => {
  return (
    <div className='user-card-income'>
      <h2>Income</h2>
      <div className='card-description'>
        <h3>40.000</h3>
        <Icon name='database' size='large' color='yellow' />
      </div>
    </div>
  );
};

export default UserCardIncome;
