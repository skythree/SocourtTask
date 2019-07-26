import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectors as authenticationSelectors } from './state/authentication'

import logo from './logo.svg';

import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NotLoggedInNavigation from './components/NotLoggedInNavigation';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let { isAuthenticated } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        {isAuthenticated ? <Sidemenu /> : <NotLoggedInNavigation />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: authenticationSelectors.getIsAuthenticated(state)
  }
}

export default connect(mapStateToProps)(App);
