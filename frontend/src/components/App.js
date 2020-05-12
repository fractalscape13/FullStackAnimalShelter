import React from 'react';
import '../App.css';
import Animals from './Animals';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from './Account';

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <hr />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Animals} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;