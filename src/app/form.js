import React, { Component } from 'react';
import Home from '../app/home'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class Form extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">NHB React App</h1>
        </header>
          <Switch>
            <Route exact path= "/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route exact path='/home' component={Home} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default Form;
