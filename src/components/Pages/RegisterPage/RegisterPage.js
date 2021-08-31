import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import './RegisterPage.styles.scss';

import SideMenu from '../MainPage/SideMenu/SideMenu';
import UserProfile from '../MainPage/UserProfile/UserProfile';
import HeaderMenu from '../MainPage/HeaderMenu/HeaderMenu';

import RegisterNewUser from './RegisterNewUser/RegisterNewUser';

const RegisterPage = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column width={3}>
          <Container className='main-header'>
            <HeaderMenu />
            <SideMenu />
          </Container>
        </Grid.Column>
        <Grid.Column width={11}>
          <Container className='register-page'>
            <RegisterNewUser />
          </Container>
        </Grid.Column>
        <Grid.Column width={2}>
          <Container className='user-profile' textAlign='center'>
            <UserProfile />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default RegisterPage;
