import React from 'react';
import Form from './Form';

const SignUp = (props) => {
  return (
    <React.Fragment>
      <h1>Sign Up Page</h1>
      <Form
        history={ props.history } /* react-router-dom's history object */
        formType='Sign Up'
        authUrl='http://localhost:3001/api/auth/signup' />
    </React.Fragment>
  );
};

export default SignUp;
