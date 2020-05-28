import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './Component/Header';
import India from './Component/India';
import World from './Component/World';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
     
      <Router>
      <Header/>
        <Switch>
          <Route exact path='/'>
            <India />
          </Route>
          <Route path='/india'>
            <India />
          </Route>
          <Route path='/world'>
            <World />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
