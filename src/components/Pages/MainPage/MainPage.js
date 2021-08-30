import React from 'react';
import { Grid, Segment, Container } from 'semantic-ui-react';
import './MainPage.styles.scss';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import SideMenu from './SideMenu/SideMenu';
import UserInfo from './UserInfo/UserInfo';

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
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column width={2}>
          <Container>
            <Segment>3</Segment>
            <Segment>3</Segment>
            <Segment>3</Segment>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MainPage;
