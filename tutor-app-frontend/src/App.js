import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from './auth';
import Authorize from './auth/Authorize'
import PublicRoute from './components/PublicRoute';
import PrivatePage from './components/PrivatePage';
import PrivateRoutes from './components/PrivateRoutes'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      authenticated: false
    }
  }

  render() {
    return (
        <Switch>
          <Route exact path="/" component={PublicRoute}/>
          <Route path="/register" component={SignUp} />
          <Route path="/signin" component={SignIn} />
           <PrivateRoutes authStatus={this.state.authenticated} component={PrivatePage} />
        </Switch>
    );
  }
}

export default App
