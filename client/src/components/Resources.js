import React from 'react';
import { connect } from 'react-redux';

import { validateAccessToken } from '../actions';

// might use react-redux-lifecycle with functional component
// https://stackoverflow.com/questions/44756488/react-stateless-functional-components-and-component-lifecycle
const Resources = (props) => {
  const accessToken = sessionStorage.getItem('accessToken');
  props.validateAccessToken(accessToken);

  return (
    !props.accessTokenIsValid || !props.userIsLoggedIn
    /* in case user is logged out but the token is still valid */
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
