import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

// importing components
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';

class App extends Component{
  render() {
    return(
      <div className = "App">
        <Router>
          <Switch>
            <Route exact path = '/'>
              <HomeComponent/>
            </Route>
            <Route path = '/login'>
              <LoginComponent/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
