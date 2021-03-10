import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';

import Button from './Components/Button/Button';

import Card from './Components/features-card/Card';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>

        <Route path="/Home">
        <Home />

        <Route path="/">

        <Button buttonName = "tour" label = "Take a tour" />

          <Card/>

        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
