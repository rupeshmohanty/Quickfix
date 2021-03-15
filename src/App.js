import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing components
import HomeComponent from './components/HomeComponent';

class App extends Component{
  render() {
    return(
      <div className = "App">
        <Router>
          <Switch>
            <Route exact path = '/'>
              <HomeComponent/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
