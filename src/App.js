import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import NewsUserContainer from './containers/NewsUserContainer.js';
import ArticleListContainer from './containers/ArticleListContainer.js';
import ArticleDetails from './components/ArticleDetails.js';


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
                <Route exact path="/articles/:id" render = {(props) => {
                  const url = "/articles/" + props.match.params.id
                  return <ArticleDetails url={url} />
                }}/>
              </Switch>
          </React.Fragment>
      </Router>
    )
  }

}

export default App;
