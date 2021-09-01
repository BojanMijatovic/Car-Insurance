import React from 'react';
import { Container, Form, Button, Select } from 'semantic-ui-react';
import './RegisterPageForm.styles.scss';

const options = [
  { key: 'e', text: 'Euro', value: 'euro' },
  { key: 'i', text: 'International', value: 'international' },
];

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
      <Form className='register-form'>
        <h3 className='form-title'>Personal Data</h3>
        <Form.Group widths='equal' className='register-form__personal-data'>
          <Form.Field required>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field required>
            <label>Surname</label>
            <input placeholder='Surname' />
          </Form.Field>
        </Form.Group>
        <Form.Field required className='register-form__personal-data'>
          <label>Address</label>
          <input placeholder='Address' />
        </Form.Field>
        <Form.Group>
          <Form.Field className='register-form__package'>
            <h4>Choose Package</h4>
            <Form.Field control={Select} label='Package' options={options} placeholder='Euro' />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field className='register-form__carInfo'>
            <h4>Car Information</h4>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label>License plate</label>
                <input placeholder='License plates' />
              </Form.Field>
              <Form.Field required>
                <label>Brand</label>
                <input placeholder='Brand' />
              </Form.Field>
              <Form.Field required>
                <label>Model</label>
                <input placeholder='Model' />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label>Color</label>
                <input placeholder='Color' />
              </Form.Field>
              <Form.Field required>
                <label>Year manufacture</label>
                <input placeholder='Year manufacture' />
              </Form.Field>
            </Form.Group>
          </Form.Field>
        </Form.Group>
        <Button type='submit' fluid className='submit-form'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPageForm;
