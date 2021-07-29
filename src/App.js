import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

// importing components
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import ProfileComponent from './components/ProfileComponent';
import RegisterComponent from './components/RegisterComponent';
import IssueComponent from './components/IssueComponent';
import LogoutComponent from './components/LogoutComponent';
import IssueDetails from './components/IssueDetailsComponent';
import EditComponent from './components/editProfileComponent';
import PasswordComponent from './components/changePasswordComponent';
class App extends Component{
  render() {
    return(
      <div className = "App">
        <Router>
          <Switch>
            <Route exact path = '/'>
              <LoginComponent/>
            </Route>
            <Route exact path = '/register'>
              <RegisterComponent/>
            </Route>
            <Route path = '/home'>
              <HomeComponent/>
            </Route>
            <Route path = '/logout'>
              <LogoutComponent/>
            </Route>
            <Route path = '/profile'>
              <ProfileComponent/>
            </Route>
            <Route path = '/raise-an-issue'>
              <IssueComponent/>
            </Route>
            <Route path = '/get-an-issue/:id'>
              <IssueDetails/>
            </Route>
            <Route path = '/edit-profile'>
              <EditComponent/>
            </Route>
            <Route path = '/change-password'>
              <PasswordComponent/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
