import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import logo from './logo.svg';
import './App.css';
import { Repos } from './GitQuery'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Repos />
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
