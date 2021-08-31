import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import './RegisterPageForm.styles.scss';

const RegisterPageForm = () => {
  return (
    <Container className='register-page-form'>
      <h3>Users Checking</h3>
      <Form className='check-form'>
        <Form.Field>
          <label>Phone</label>
          <input placeholder='Phone' />
        </Form.Field>
        <Button type='submit' fluid>
          Check
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPageForm;
