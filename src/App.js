import React, { Component } from 'react';
import Signup from './components/auth/signup'
import { Route, Switch } from 'react-router-dom'
import Signin from './components/auth/signin'
import Home from './components/home'
import PrivatePage from './components/privatePage'
import { Auth } from 'aws-amplify';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/private" component={PrivatePage}/>
      </Switch>
    );
  }
}

export default App;
