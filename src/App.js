import React from 'react';
import { Container } from 'semantic-ui-react';
import './styles.scss';
import MainPage from './components/Pages/MainPage/MainPage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';
import NetworkPage from './components/Pages/NetworkPage/NetworkPage';
import PackagesPage from './components/Pages/PackagesPage/PackagesPage';

const App = () => {
  return (
    <Container>
      {/* <MainPage /> */}
      {/* <RegisterPage /> */}
      {/* <NetworkPage /> */}
      <PackagesPage />
    </Container>
  );
};

export default App;
