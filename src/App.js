import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Card from './Components/features-card/Card';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/">
          <Card/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
