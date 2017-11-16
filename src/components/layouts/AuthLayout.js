import React, { Component } from 'react';

class AuthLayout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login page</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default AuthLayout;
