import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Import Components
import LoginScreen from './components/login_screen/LoginScreen.js';
import GPDHomeScreen from './components/home_screen/GPDHomeScreen.js';
import AddStudentScreen from './components/add_student/AddStudentScreen.js';
import Navbar from './components/navbar/Navbar.js';

class App extends Component{
  render() {
    return (
          <BrowserRouter>
            <div className="App">
            <Navbar />
              <Switch>
                <Route path="/login" component={LoginScreen} />
                <Route exact path="/" component={GPDHomeScreen} />
                <Route exact path="/addStudent" component={AddStudentScreen} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}
export  default App;
