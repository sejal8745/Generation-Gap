
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button/Button";
import Card from "./Components/features-card/Card";
import AddNote from "./Components/AddNote/AddNote";
import { auth, provider } from './firebase';
import SearchWord from "./Pages/Dictionary/SearchWord";
import Home from './Pages/Home/Home';
import AddNote from "./Components/AddNote/AddNote";



function App() {
 
  return (
    <div className="App">
    <Router>
      <Switch>

        <Route path="/notes">
            <AddNote/>
          </Route>
          <Route path="/dictionary">
              <SearchWord/>
          </Route>
        <Route path="/">
          <Button buttonName = "tour" label = "Take a tour" />
        <Card/>
        <button onClick={login}>Login</button>
        <Button buttonName = "tour" label = "Take a tour" />
        </Route>


      <Route path="/home">
        <Home />
        </Route>
        
       

      </Switch>
    </Router>
    </div>
  );
}

export default App;
