import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './SideMenu.styles.scss';

const SideMenu = () => {
  return (
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
          <Header.Content>Register new User</Header.Content>
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
  );
};

export default SideMenu;
