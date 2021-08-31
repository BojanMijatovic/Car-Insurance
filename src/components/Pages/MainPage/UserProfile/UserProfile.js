import React from 'react';
import { Segment } from 'semantic-ui-react';

import UserProfileInfo from './UserProfileInfo/UserProfileInfo';
import UserProfilePackage from './UserProfilePackage/UserProfilePackage';

const UserProfile = () => {
  return (
    <React.Fragment>
      <UserProfileInfo />
      <UserProfilePackage />
    </React.Fragment>
  );
};

export default UserProfile;
