//import { Router } from 'express';
import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import AddEmployee from './components/USER/AddEmployee';
import EditEmployee from './components/USER/EditEmployee';
import Employeedetails from './components/USER/Employeedetails';
import Home from './components/USER/Home';
import NavBar from './components/USER/NavBar';
import HomePage from './components/HOMEPAGE/HomePage';
import PrivateRoute from './components/USER/routing/PrivateRoute';

//screens
import LoginScreen from './components/USER/screens/LoginScreen';
import PrivateScreen from './components/USER/screens/PrivateScreen';
import ForgotPasswordScreen from './components/USER/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/USER/screens/ResetPasswordScreen';

import SideNav from './components/SIDENAV/sidenav';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        {/*<HomePage/>*/}
        {/*<NavBar/>*/}
        <div className="app">
          <Switch>
            {/*<PrivateRoute exact path="/" component={PrivateScreen}/>*/}
            <Route exact path="/login" component={LoginScreen}></Route>
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen}></Route>
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}></Route>
            <Route exact path="/sidenav" component={SideNav}></Route> 
          </Switch>
        </div>

        <Route path="/user/" exact component={NavBar}></Route>
        <Route path="/user/add" exact component={NavBar}></Route>

        <div className="container">
            <Route path="/" exact component={PrivateScreen}></Route>
            <Route path="/user/" exact component={Home}></Route>
            <Route path="/user/add" component={AddEmployee}></Route>
            <Route path="/user/edit/:id" component={EditEmployee}></Route>
            <Route path="/user/employee/:id" component={Employeedetails}></Route>  
    </div>
     </BrowserRouter>
    );
  }
}

export default App;
