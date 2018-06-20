import React from 'react';
import { Link } from 'react-router-dom';

class SignOut extends React.Component {
  onSignOut = () => {
    console.log('signed out');
    //sessionStorage.removeItem('accessToken');

    // TODO: set isLoggedIn state
  }

  render() {
    return <Link to='/' onClick={ this.onSignOut }>Sign Out</Link>
  }
};

export default SignOut;
