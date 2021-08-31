import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import './MainPage.styles.scss';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import SideMenu from './SideMenu/SideMenu';
import UserInfo from './UserInfo/UserInfo';
import UserStatistic from './UserStatistic/UserStatistic';
import UserProfile from './UserProfile/UserProfile';

const MainPage = () => {
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
          <UserInfo />
          <UserStatistic />
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

export default MainPage;
