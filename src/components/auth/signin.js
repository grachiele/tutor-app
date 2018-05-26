import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import {Link} from 'react-router-dom'

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onSubmitForm = async (e) => {
    e.preventDefault()
    const data = await Auth.signIn(this.state.username, this.state.password);
    console.log(data)
  }


  render() {
    console.log(this.state)
    return (
      <div>
      <Link to="/private" ><button>route</button></Link>
        <h1>Sign In</h1>
        <form  onSubmit={(e) => this.onSubmitForm(e)}>
          <input type="username" placeholder="Username" value={this.state.username} onChange={(e) => this.onUsernameChanged(e)}/>
          <input  type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.onPasswordChanged(e)}/>
          <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }

}
export default Signin;
