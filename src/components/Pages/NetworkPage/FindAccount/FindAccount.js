import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import './FindAccount.styles.scss';

const FindAccount = () => {
  return (
    <Form className='find-account'>
      <h3>Find Account</h3>
      <Form.Field>
        <label>name and last name</label>
        <input placeholder='name and last name' />
      </Form.Field>
      <Button type='submit' fluid>
        Find
      </Button>
    </Form>
  );
};

export default FindAccount;
