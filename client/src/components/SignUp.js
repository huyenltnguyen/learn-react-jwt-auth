import React, { Fragment } from 'react';
import Form from './Form';

const SignUp = (props) => {
  return (
    <Fragment>
      <h1>Sign Up Page</h1>
      <Form
        history={ props.history } /* react-router-dom's history object */
        formType='Sign Up'
        authUrl='http://localhost:3001/api/auth/signup' />
    </Fragment>
  );
};

export default SignUp;
