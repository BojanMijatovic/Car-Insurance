import React from 'react';
import { Grid, Segment, Container, Header, Icon, SegmentGroup } from 'semantic-ui-react';
import './MainPage.styles.scss';

const MainPage = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column width={4}>
          <Container className='main-header'>
            <header className='header'>
              <Header as='h1'>
                <Icon name='car' size='big' />
                <Header.Content className='header-text'>Car Help</Header.Content>
              </Header>
              <p className='header-subtext'>Business program</p>
            </header>
            <div className='menu-items'>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='home' />
                  <Header.Content>Home</Header.Content>
                </Header>
              </div>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='add user' />
                  <Header.Content>Register User</Header.Content>
                </Header>
              </div>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='sitemap' />
                  <Header.Content>My Network</Header.Content>
                </Header>
              </div>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='add square' />
                  <Header.Content>Add Product</Header.Content>
                </Header>
              </div>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='calendar times' />
                  <Header.Content>End Package</Header.Content>
                </Header>
              </div>
              <div className='menu-item'>
                <Header as='h3'>
                  <Icon name='info circle' />
                  <Header.Content>Info Organization</Header.Content>
                </Header>
              </div>
            </div>
          </Container>
        </Grid.Column>
        <Grid.Column width={8}>
          <Container>
            <Segment>2</Segment>
            <Segment>2</Segment>
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
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
