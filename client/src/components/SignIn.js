import React, { Fragment } from 'react';
import Form from './Form';

const SignIn = (props) => {
  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <Form
        history={ props.history } /* react-router-dom's history object */
        formType='Sign In'
        authUrl='http://localhost:3001/api/auth/signin' />
    </Fragment>
  );
};

export default SignIn;
