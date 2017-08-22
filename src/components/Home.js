import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Books 4 Students</h2>
          <div><Link to='/home'>Home Page</Link></div>
          <div><Link to='/about'>About</Link></div>
          <div><Link to='/login'>Login</Link></div>
          <div><Link to='create-user'>Create User</Link></div>
          <div><Link to='profile'>Profile</Link></div>
        </div>
        {this.props.children}
      </div>

    )
  }
}
