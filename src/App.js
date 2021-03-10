import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Button from './Components/Button/Button';
import Signup from './Pages/Register/Signup';

import Card from './Components/features-card/Card';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/register">
          <Signup/>
        </Route>
        <Route path="/">
          <Button buttonName = "tour" label = "Take a tour" />

        <Button buttonName = "tour" label = "Take a tour" />

          <Card/>

        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
