import React from 'react';
import Layout from './components/Layout';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/theme/dark';
import ligtht from './styles/theme/ligtht';
import Dashboard from './pages/Dashboard';
import List from './pages/List';

function App() {
  return (
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
          <List />
        </Layout>  
      </ThemeProvider>
  );
}

export default App;
