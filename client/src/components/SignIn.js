import React from 'react';
import Form from './Form';

const SignIn = (props) => {
  return (
    <React.Fragment>
      <h1>Sign In Page</h1>
      <Form
        history={ props.history } /* react-router-dom's history object */
        formType='Sign In'
        authUrl='http://localhost:3001/api/auth/signin' />
    </React.Fragment>
  );
};

export default SignIn;
