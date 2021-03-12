
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button/Button";
import Card from "./Components/features-card/Card";
import AddNote from "./Components/AddNote/AddNote";
import { auth, provider } from './firebase';
<<<<<<< HEAD
import GamePage from './GamePage';
=======
import SearchWord from "./Pages/Dictionary/SearchWord";
import Home from './Pages/Home/Home';
import AddNote from "./Components/AddNote/AddNote";

>>>>>>> 353a1e48e393f04cfa13b80d0485df77c25c0c27


function App() {
 
  return (
    <div className="App">
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/games">
        <GamePage/>
        </Route>
        <Route path="/">
        
        <Card/>
        <button onClick={login}>Login</button>
        
=======

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
>>>>>>> 353a1e48e393f04cfa13b80d0485df77c25c0c27
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
