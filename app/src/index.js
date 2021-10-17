import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ChatPage, MainPage, ProfilePage } from './pages';
import "./global.css";

const light = createTheme({
  theme: {
    color: "red",
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={light}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route path="*">
          <h1>404 page</h1>
          <Link to="/chat">go to Chat</Link>
        </Route>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
