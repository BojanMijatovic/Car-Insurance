import React from 'react';
import { Container } from 'semantic-ui-react';
import './styles.scss';
import MainPage from './components/Pages/MainPage/MainPage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';
import NetworkPage from './components/Pages/NetworkPage/NetworkPage';

const App = () => {
  return (
    <Container>
      {/* <MainPage /> */}
      {/* <RegisterPage /> */}
      <NetworkPage />
    </Container>
  );
};

export default App;
