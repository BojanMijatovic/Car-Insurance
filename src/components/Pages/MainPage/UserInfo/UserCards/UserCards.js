import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import UserCard from '../UserCard/UserCard';

import './UserCards.styles.scss';

const UserCards = () => {
  return (
    <Container className='user-cards'>
      <Grid columns='equal'>
        <Grid.Column>
          <UserCard />
        </Grid.Column>
        <Grid.Column>
          <UserCard />
        </Grid.Column>
        <Grid.Column>
          <UserCard />
        </Grid.Column>
        <Grid.Column>
          <UserCard />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default UserCards;
