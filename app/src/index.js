import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ChatPage } from "./pages";
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
        <Route path="/chat">
          <ChatPage />
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
