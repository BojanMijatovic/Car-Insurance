import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import './UserStatistic.styles.scss';

const UserStatistic = () => {
  return (
    <Container className='user-statistic'>
      <Header as='h2'>Welcome User</Header>
    </Container>
  );
};

export default UserStatistic;
