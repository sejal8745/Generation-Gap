


import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import AddNote from "./Components/AddNote/AddNote";
import Login from '../src/Components/Login/Login'
import Main from '../src/Components/Main/Main'
import Profile from '../src/Components/Profile/Profile'
import { toast, ToastContainer } from 'react-toastify'

function App() {
   const showToast = (type, message) => {
    // 0 = warning, 1 = success
    switch (type) {
      case 0:
        toast.warning(message)
        break
      case 1:
        toast.success(message)
        break
      default:
        break
    }
  }
  return (
    <div className="App">
      <Router>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login showToast={showToast} {...props} />}
          />
          <Route
            exact
            path="/main"
            render={props => <Main showToast={showToast} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile showToast={showToast} {...props} />
            )}
          />
          <Route path="/home">

            <Home />
          </Route>
          <Route path="/notes">
            <AddNote />
          </Route>

        </Switch>
      </Router>

import GamePage from './GamePage';
import SearchWord from "./Pages/Dictionary/SearchWord";
import Home from './Pages/Home/Home';

import SearchWord from "./Pages/Dictionary/SearchWord";

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

          </Route>
          <Route path="/games">
            <GamePage />
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
