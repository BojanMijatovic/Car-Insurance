import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import './AccountNetworkPage.styles.scss';

import FindAccount from '../FindAccount/FindAccount';
import ShowAccount from '../ShowAccount/ShowAccount';

const AccountNetworkPage = () => {
  return (
    <Container className='account-network-page'>
      <Header as='h2' className='network-page__header'>
        <Icon name='handshake' />
        <Header.Content>My Network</Header.Content>
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width='6'>
            <FindAccount />
          </Grid.Column>
          <Grid.Column width='10'>
            <Container>
              <ShowAccount />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AccountNetworkPage;
