import React from 'react';
import { connect } from 'react-redux';

import { validateAccessToken } from '../actions';

const Resources = (props) => {
  const accessToken = sessionStorage.getItem('accessToken');
  props.validateAccessToken(accessToken);

  return (
    !props.accessTokenIsValid && !props.userIsLoggedIn
    ? <p>Please sign in to access this page.</p>
    : <p>Some secret stuff</p>
  );
};

const mapStateToProps = (state) => {
  return {
    accessTokenIsValid: state.accessTokenIsValid,
    userIsLoggedIn: state.userIsLoggedIn
  };
};

export default connect(mapStateToProps, { validateAccessToken })(Resources);
