
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button/Button";
import Card from "./Components/features-card/Card";
import AddNote from "./Components/AddNote/AddNote";

import GamePage from './GamePage';
import SearchWord from "./Pages/Dictionary/SearchWord";
import Home from './Pages/Home/Home';




function App() {
 
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/games">
          <GamePage/>
        </Route>
        <Route path="/notes">
            <AddNote/>
          </Route>
          <Route path="/dictionary">
              <SearchWord/>
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
