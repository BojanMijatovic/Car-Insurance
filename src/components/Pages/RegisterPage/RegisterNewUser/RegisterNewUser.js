import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import './RegisterNewUser.styles.scss';

import RegisterPageForm from '../RegisterPageForm/RegisterPageForm';

const RegisterNewUser = () => {
  return (
    <>
      <Header.Content className='register-header'>
        <Header as='h2'>
          <Icon name='users' className='title' />
          <Header.Content>
            <h2 className='title'>Register New User</h2>
          </Header.Content>
        </Header>
      </Header.Content>
      <RegisterPageForm />
    </>
  );
};

export default RegisterNewUser;
