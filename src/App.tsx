import { Container } from '@mui/material';
import React from 'react';
import MainForm from './pages/MainForm/MainForm';

const App = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <MainForm />
      </Container>
    </>
  );
};

export default App;
