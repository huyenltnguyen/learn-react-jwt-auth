import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOut from './SignOut';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/resources'>Resources</Link></li>
          {
            props.userIsLoggedIn
            ? <SignOut />
            : <Fragment>
                <li><Link to='/signin'>Sign In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
              </Fragment>
          }
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userIsLoggedIn: state.userIsLoggedIn
  };
}

export default connect(mapStateToProps)(Header);
