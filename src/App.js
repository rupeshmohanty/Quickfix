import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

// importing components
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import ProfileComponent from './components/ProfileComponent';
import IssueComponent from './components/IssueComponent';

class App extends Component{
  render() {
    return(
      <div className = "App">
        <Router>
          <Switch>
            <Route exact path = '/'>
              <LoginComponent/>
            </Route>
            <Route path = '/home'>
              <HomeComponent/>
            </Route>
            <Route path = '/profile'>
              <ProfileComponent/>
            </Route>
            <Route path = '/raise-an-issue'>
              <IssueComponent/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
