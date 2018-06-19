import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: ''
    };
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

    fetch(this.props.authUrl, {
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
        sessionStorage.setItem('accessToken', data.token);  // store token in session storage
        this.props.history.push('/');
      }
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
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
          <input type='submit' value={ this.props.formType } />
        </form>
      </div>
    );
  }
};

export default Form;
