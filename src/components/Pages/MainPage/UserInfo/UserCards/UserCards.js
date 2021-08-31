import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import UserCardLevel from '../UserCardLevel/UserCardLevel';
import UserCardIncome from '../UserCardIncome/UserCardIncome';
import UserCardPoints from '../UserCardPoints/UserCardPoints';
import UserCardAddNew from '../UserCardAddNew/UserCardAddNew';

import './UserCards.styles.scss';

const UserCards = () => {
  return (
    <Container className='user-cards'>
      <Grid columns='equal'>
        <Grid.Column>
          <UserCardLevel />
        </Grid.Column>
        <Grid.Column>
          <UserCardIncome />
        </Grid.Column>
        <Grid.Column>
          <UserCardPoints />
        </Grid.Column>
        <Grid.Column>
          <UserCardAddNew />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default UserCards;
