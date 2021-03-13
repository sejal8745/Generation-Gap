import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button/Button";
import Card from "./Components/features-card/Card";
import AddNote from "./Components/AddNote/AddNote";
import { auth, provider } from './firebase';
import GamePage from './GamePage';
import SearchWord from "./Pages/Dictionary/SearchWord";
import Home from "./Pages/Home/Home";
import DailyNews from "./Pages/News/DailyNews";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/notes">
            <AddNote />
          </Route>
          <Route path="/about">
            <About />

        <Route path="/games">
        <GamePage/>
        </Route>
        <Route path="/dictionary">
            <SearchWord />
          </Route>
          <Route path="/news">
            <DailyNews />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Button buttonName="tour" label="Take a tour" />
            <Card />
            <Button buttonName="tour" label="Take a tour" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
