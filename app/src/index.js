import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { MessageList, ChatList } from './components';
import './global.css';

const dark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <ChatList />
    <MessageList />
  </ThemeProvider>,
  document.getElementById("root")
);
