//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import Styling
import './index.css';

//import React React-router
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


//import service working
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <Home>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/create-user' component={CreateUser}/>
        <Route path='/profile' component={Profile}/>
        <Route path='login' component={Login}/>
      </Switch>
    </Home>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
