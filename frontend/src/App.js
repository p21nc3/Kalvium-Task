import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login';
import dashboard from './components/dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/dashboard" component={dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
