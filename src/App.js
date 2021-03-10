import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/">
        <Button buttonName = "tour" label = "Take a tour" />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
