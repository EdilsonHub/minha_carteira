import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import dark from './styles/theme/dark';
import ligtht from './styles/theme/ligtht';

function App() {
  return (
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
  );
}

export default App;
