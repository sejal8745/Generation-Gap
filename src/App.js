import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Button from './Components/Button/Button';

import Card from './Components/features-card/Card';
import { auth, provider } from './firebase';

function App() {
  const login= ()=>{
    auth.signInWithPopup(provider).catch((e)=>{alert(e.message)});
  };
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/">
        <Card/>
        <button onClick={login}>Login</button>

        <Button buttonName = "tour" label = "Take a tour" />

          <Card/>

        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
