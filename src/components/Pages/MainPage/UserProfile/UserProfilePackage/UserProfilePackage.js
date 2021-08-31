import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import './UserProfilePackage.styles.scss';

const UserProfilePackage = () => {
  return (
    <div className='user-package'>
      <div className='user-package__header'>
        <Header as='h3'>Packages</Header>
      </div>
      <div className='user-packages'>
        <div className='user-package__title'>
          <p>EURO +</p>
        </div>
        <div className='user-package__title'>
          <p>INTERNATIONAL</p>
        </div>
      </div>
      <Button compact fluid primary>
        <Icon name='log out' />
        log out
      </Button>
    </div>
  );
};

export default UserProfilePackage;
