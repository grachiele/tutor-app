import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props) {
  return class extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      if (!localStorage.getItem('CognitoIdentityServiceProvider.142h0b0gpa9cs6sj0ejhsl8vip.gianpaul817|gmail|com.refreshToken') && this.props.location.pathname !== "/login" && this.props.location.pathname !== '/signup') {
        return <Redirect to="/login" />
      } else if (localStorage.getItem('CognitoIdentityServiceProvider.142h0b0gpa9cs6sj0ejhsl8vip.gianpaul817|gmail|com.refreshToken') && (this.props.location.pathname === "/login" || this.props.location.pathname === '/signup')){
        return <Redirect to="/app" />
      } else {
        return <RenderedComponent {...this.props}/>
      }

    }
  }
}

export default Authorize
