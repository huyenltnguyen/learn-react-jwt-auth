import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserLogInStatus } from '../actions';

class SignOut extends React.Component {
  onSignOut = () => {
    this.props.setUserLogInStatus(false);
  }

  render() {
    return <Link to='/' onClick={ this.onSignOut }>Sign Out</Link>
  }
};

export default connect(null, { setUserLogInStatus })(SignOut);
