import React from 'react';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
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

      if (data.token) {
        sessionStorage.setItem('jwtToken', data.token);
        this.props.history.push('/');
      }

      this.setState({
        email: '',
        password: ''
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
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
