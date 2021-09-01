import React from 'react';
import { Container, Image, Card, Rating, Header } from 'semantic-ui-react';

import './ShowAccount.styles.scss';

const ShowAccount = () => {
  return (
    <Container className='show-account'>
      <Card>
        <Card.Content>
          <Card.Description className='show-account__name'>
            <Header as='h3'>
              <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
            </Header>
          </Card.Description>
          <Card.Description>
            email: <strong>tessie@gmail.com</strong>
          </Card.Description>
          <Card.Description className='show-account__info'>
            <span>Status: Silver</span>
            <Rating icon='star' defaultRating={2} maxRating={3} disabled size='large' className='test' />
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default ShowAccount;
