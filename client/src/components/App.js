import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Resources from './Resources';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/resources' component={ Resources } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
