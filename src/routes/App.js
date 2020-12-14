import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Game from "../pages/Game";
import GameOver from "../pages/GameOver";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

import "./App.css";
import AppContex from "../contex/AppContext";
import initialState from "../initialState";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#181818",
    color: "#ffffff",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppContex.Provider value={initialState}>
      <Router className={classes.root}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/gameover" component={GameOver} />
            <Route default component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </AppContex.Provider>
  );
}

export default App;
