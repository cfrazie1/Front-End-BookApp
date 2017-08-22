import React, { Component } from 'react';


export default class Login extends Component {
  render(){
    return(

      <form>
        <h1>Login</h1>
        <div className="Login">
          <label>Email Address</label>
          <input type="text" className="form-email" name="email"/>
        </div>
        <div className="Login">
          <label>Password</label>
          <input type="text" className="form-email" name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit
       </button>
      </form>
    )
  }
}
