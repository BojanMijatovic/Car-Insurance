import React from 'react';
import { Container } from 'semantic-ui-react';
import './styles.scss';
import MainPage from './components/Pages/MainPage/MainPage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <Container>
      <RegisterPage />
    </Container>
  );
};

export default App;
