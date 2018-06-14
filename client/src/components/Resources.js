import React from 'react';
import { connect } from 'react-redux';

import { validateAccessToken } from '../actions';

class Resources extends React.Component {
  componentDidMount() {
    const accessToken = sessionStorage.getItem('accessToken');
    this.props.validateAccessToken(accessToken);
  }

  render() {
    if (!this.props.accessTokenIsValid) {
      return <p>Please sign in to access this page.</p>
    }

    return (
      <div>
        <p>Some secret stuff</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    accessTokenIsValid: state.accessTokenIsValid
  };
};

export default connect(mapStateToProps, { validateAccessToken })(Resources);
