
import React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import AddNote from "./Components/AddNote/AddNote";


function App() {
 
  return (
    <div className="App">
    <Router>
      <Switch>

      <Route path="/home">
        <Home />
        </Route>
        <Route path="/notes">
            <AddNote/>
          </Route>
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;
