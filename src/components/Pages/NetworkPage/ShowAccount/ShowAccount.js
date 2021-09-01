import React from 'react';
import { Container, Image, Card, Rating } from 'semantic-ui-react';

import './ShowAccount.styles.scss';

const ShowAccount = () => {
  return (
    <Container className='show-account'>
      <Card>
        <Card.Content>
          <Image floated='right' size='medium' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>Account Tessie</Card.Header>
          <Card.Description>
            email: <strong>tessie@gmail.com</strong>
          </Card.Description>
          <Card.Description className='show-account__info'>
            <span>Silver</span>
            <Rating icon='star' defaultRating={2} maxRating={3} disabled size='large' className='test' />
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default ShowAccount;
