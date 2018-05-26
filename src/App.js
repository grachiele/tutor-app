import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirm: '',
      code: ''
    };
  }

  onEmailChanged(e) {
    this.setState({ email: e.target.value.toLowerCase() });
  }

  onUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onConfirmationChanged(e) {
    this.setState({ confirm: e.target.value });
  }

  onCodeChanged(e) {
    this.setState({ code: e.target.value });
  }
  onSubmitForm = async (e) => {
    e.preventDefault()
    const params = {
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email
      }
    }
    const data = await Auth.signUp(params);
    console.log(data)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="form-wrap">
          <h1>Register</h1>
          <form id="registrationForm" onSubmit={(e) => this.onSubmitForm(e)}>
            <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.onEmailChanged(e)}/>
            <input type="username" placeholder="Username" value={this.state.username} onChange={(e) => this.onUsernameChanged(e)}/>
            <input  type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.onPasswordChanged(e)}/>
            <input  type="password" placeholder="Confirm Password" value={this.state.confirm} onChange={(e) => this.onConfirmationChanged(e)}/>
            <input type="submit" value="Let's Ryde"/>
          </form>
        </section>
      </div>
    );
  }
}

export default App;





//   async onSubmitForm(e) {
//     console.log(this.state)
//       e.preventDefault();
//       try {
//         const params = {
//           username: this.state.email.replace(/[@.]/g, '|'),
//           password: this.state.password,
//           attributes: {
//             email: this.state.email,
//             phone_number: this.state.phone
//           },
//           validationData: []
//         };
//         const data = await Auth.signUp(params);
//         console.log(data);
//         this.setState({ stage: 1 });
//       } catch (err) {
//         alert(err.message);
//         console.error("Exception from Auth.signUp: ", err);
//         this.setState({ stage: 0, email: '', password: '', confirm: '' });
//       }
//     }
//
//     async onSubmitVerification(e) {
//       e.preventDefault();
//       try {
//         const data = await Auth.confirmSignUp(
//           this.state.email.replace(/[@.]/g, '|'),
//           this.state.code
//         );
//         console.log(data);
//         // Go to the sign in page
//         this.props.history.replace('/signin');
//       } catch (err) {
//         alert(err.message);
//         console.error("Exception from Auth.confirmSignUp: ", err);
//         this.setState({ stage: 0, email: '', password: '', confirm: '', code: '' });
//       }
//     }
//
//   isValidEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }
//
//   renderSignUp() {
//     const isValidEmail = this.isValidEmail(this.state.email);
//     const isValidPassword = this.state.password.length > 6;
//     const isValidConfirmation = isValidPassword && this.state.password === this.state.confirm;
//
//     return (
//       <div className="app">
//         <header>
//
//         </header>
//
//       </div>
//     );
//   }
//
//   renderConfirm() {
//     const isValidEmail = this.isValidEmail(this.state.email);
//     const isValidCode = this.state.code.length === 6;
//
//     return (
//       <div className="app">
//         <header>
//
//         </header>
//         <section className="form-wrap">
//           <h1>Verify Email</h1>
//           <form id="verifyForm" onSubmit={(e) => this.onSubmitVerification(e)}>
//             <input className={isValidEmail?'valid':'invalid'} type="email" placeholder="Email" value={this.state.email}/>
//             <input className={isValidCode?'valid':'invalid'} type="text" placeholder="Verification Code" value={this.state.code} onChange={(e) => this.onCodeChanged(e)}/>
//             <input disabled={!(isValidCode&&isValidEmail)} type="submit" value="Verify"/>
//           </form>
//         </section>
//       </div>
//     );
//   }
//
//   render() {
//     switch (this.state.stage) {
//       case 0:
//       default:
//         return this.renderSignUp();
//       case 1:
//         return this.renderConfirm();
//     }
//   }
// }
//
// export default withRouter(SignUp);
