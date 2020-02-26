import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

function App() {

  return(
    <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
    </Router>
  )
}

export default App;