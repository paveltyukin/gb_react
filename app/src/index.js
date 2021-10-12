import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { MessageList } from './components';
import './global.css';

const dark = createTheme({
  theme: {
    color: "black",
  },
});

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <MessageList />
  </ThemeProvider>,
  document.getElementById("root")
);
