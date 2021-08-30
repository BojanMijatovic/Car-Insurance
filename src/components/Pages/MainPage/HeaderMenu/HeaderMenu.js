import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HeaderMenu = () => {
  return (
    <header className='header'>
      <Header as='h1'>
        <Icon name='car' size='big' />
        <Header.Content className='header-text'>Car Help</Header.Content>
      </Header>
      <p className='header-subtext'>Business program</p>
    </header>
  );
};

export default HeaderMenu;
