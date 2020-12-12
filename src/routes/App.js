import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "../pages/Game";
import GameOver from "../pages/GameOver";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/gameover" component={GameOver} />
          <Route default component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
