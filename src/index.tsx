import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App } from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCDCE2',
    },
    secondary: {
      main: '#FFFCFD',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
