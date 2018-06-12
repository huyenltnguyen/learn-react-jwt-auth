import React from 'react';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.email || !this.state.password) {
      this.setState({
        message: 'Please enter your email and password.'
      });
      return;
    }

    const signUpUrl = 'http://localhost:3001/api/auth/signup';


    fetch(signUpUrl, {
      method: 'post',
      headers: {
        // add this to fix the issue that server doesn't receive body
        // https://stackoverflow.com/questions/29775797/fetch-post-json-data
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...this.state })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message);

      this.setState({
        email: '',
        password: '',
        message: data.message
      });

      if (data.token) {
        sessionStorage.setItem('jwtToken', data.token);
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <p>{ this.state.message }</p>
        <form onSubmit={ this.handleFormSubmit }>
          <label>
            Email:
            <input
              name='email'
              type='email'
              placeholder='Your email...'
              value={ this.state.email }
              onChange={ this.handleInputChange }
            />
          </label>
          <label>
            Password:
            <input
              name='password'
              type='password'
              placeholder='Your password...'
              value={ this.state.password }
              onChange={ this.handleInputChange }
            />
          </label>
          <input type='submit' value='Sign Up' />
        </form>
      </div>
    );
  }
};

export default SignUp;
