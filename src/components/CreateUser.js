import React, { Component } from 'react';


export default class CreateUser extends Component {
  // Constructor(props){
  //   this.state ={
  //     firstName:"",
  //     lastName:"",
  //     email:"",
  //     password:"",
  //     confirmPassword:""
  //   }
  //
  // }
  render(){
    return(
      <div className= "CreateUser">
      <form>
      <label htmlFor="firstName" > first Name </label>
       <input
       ref="firstName"
        placeholder="First name"
        // value={this.state.firstName}
        // onChange={e => this.setState({ firstName: e.target.value })}
        />
        <label htmlFor="lastName" > last Name </label>
        <input
        ref="lastName"
          placeholder="Last name"
          // value={this.state.lastName}
          // onChange={e => this.setState({ firstName: e.target.value})}
        />
        <label htmlFor="email" > email </label>
        <input
        ref="email"
         placeholder="Email"
        //  value={this.state.email}
        //  onChange={e => this.setState({email: e.target.value})}
         />
         <label htmlFor="Password" > Password </label>
         <input
         ref="Password"
         placeholder="Password"
        //  value={this.state.password}
        //  onChange={e => this.setState({email: e.target.value})}
         />
         <label htmlFor="confirmPassword" > confirm Password </label>
        <input
        ref="confirmPassword"
         placeholder="Confirm Password"
        //  value={this.state.confirmPassword}
        //  onChange={e => this.setState({email: e.target.value})}
         />
          <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}
