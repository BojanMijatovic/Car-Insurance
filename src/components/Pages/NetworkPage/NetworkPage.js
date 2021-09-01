import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import HeaderMenu from '../MainPage/HeaderMenu/HeaderMenu';
import SideMenu from '../MainPage/SideMenu/SideMenu';
import UserProfile from '../MainPage/UserProfile/UserProfile';
import AccountNetworkPage from './AccountNetworkPage/AccountNetworkPage';
import './NetworkPage.styles.scss';

const NetworkPage = () => {
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
          <Container className='network-page'>
            <AccountNetworkPage />
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

export default NetworkPage;
