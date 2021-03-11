import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Button from './Components/Button/Button';
import Signup from './Pages/Register/Signup';

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
      <Route path="/register">
          <Signup/>
        </Route>
        <Route path="/">
          <Button buttonName = "tour" label = "Take a tour" />

        <Card/>
        <button onClick={login}>Login</button>


        <Button buttonName = "tour" label = "Take a tour" />


        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
