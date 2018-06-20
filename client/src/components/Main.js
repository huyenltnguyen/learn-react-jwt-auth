import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/resources' component={ Resources } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/signup' component={ SignUp } />
      </Switch>
    </main>
  );
}


export default Main;
