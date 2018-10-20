import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import NewsUserContainer from './containers/NewsUserContainer.js';
import ArticleListContainer from './containers/ArticleListContainer.js';
import './App.css';

//
class App extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            <NavBar/>
              <Switch>
                <Route exact path="/home" component ={NewsUserContainer} />
                <Route exact path="/user" component ={NewsUserContainer}/>
                <Route exact path="/Article" component ={ArticleListContainer}/>
              </Switch>
          </React.Fragment>
      </Router>
    )
  }
}

export default App;
