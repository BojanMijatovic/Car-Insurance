import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './UserProfileInfo.styles.scss';

const UserProfileInfo = () => (
  <Card>
    <Image
      src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      wrapped
      ui={false}
      className='profile-image'
    />
    <Card.Content>
      <h3 className='profile-firstName'>Matthew Madison</h3>
      <Card.Description>Matthew89</Card.Description>
    </Card.Content>
  </Card>
);

export default UserProfileInfo;
